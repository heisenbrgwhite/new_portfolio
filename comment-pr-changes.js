const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { OpenAI } = require("openai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const githubToken = process.env.GITHUB_TOKEN;
const prNumber = process.env.PR_NUMBER;
const repo = process.env.GITHUB_REPOSITORY;
const [owner, repoName] = repo.split("/");

async function getPullRequestFiles() {
  const url = `https://api.github.com/repos/${owner}/${repoName}/pulls/${prNumber}/files`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${githubToken}`,
    },
  });
  return response.data;
}

async function commentOnPullRequest(body) {
  const url = `https://api.github.com/repos/${owner}/${repoName}/issues/${prNumber}/comments`;
  await axios.post(
    url,
    { body },
    {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }
  );
}

async function getReviewFromApiChatGpt(changes) {
  const baseURL = "https://api.aimlapi.com/v1";
  const apiKey = "6ebf6933be6e4defa5d4e980a09dce86";
  const systemPrompt = "You are a senior developer. Be descriptive and helpful";
  const userPrompt = "Tell me a joke about javascript";

  const api = new OpenAI({
    apiKey,
    baseURL,
  });

  try {
    const completion = await api.chat.completions.create({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 256,
    });

    const response = completion.choices[0].message.content;
    return response;
  } catch (error) {
    console.error(`AI API Error: ${error.message}`);
  }
}
async function getReviewFromApiGemini(changes) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "You are a senior developer who knows everything about coding best practices. You like to review code especially github pull requests. From now on I will give you some code snippets and you should review it based on the rules below:\n1. Give feedback on the code if it requires improvement.\n2. Look for typescript specific improvements.\n3. reply with a review if the code requires improvement, if the code is perfect no reply is needed.\n4. analyze the whole code and look for redundant code or unused variables, also give feedback on variable and function names if require improvement.\n5. If you have suggestion then use github suggestion format to paste the code and reply with a description of the suggestion.\nGithub suggestion format: \n```suggestion\n${suggested code} //replace this with your code\n```\n${description} //replace this with your description.",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Okay, I'm ready to review your code snippets. Please provide the code, and I'll give you feedback based on the criteria you outlined. Let's make it the best code it can be! \n",
            },
          ],
        },
      ],
    });
    const result = await chatSession.sendMessage(
      'before: "' + changes.before + '"\nafter: "' + changes.after + '"'
    );
    return result.response.text();
  } catch (error) {
    console.error(`AI API Error: ${error.message}`);
  }
}

function separateAndCleanCode(input) {
  const lines = input.split("\n");
  const before = [];
  const after = [];

  lines.forEach((line) => {
    if (line.startsWith("-")) {
      before.push(line.substring(1).trim());
    } else if (line.startsWith("+")) {
      after.push(line.substring(1).trim());
    }
  });

  return {
    before: before.join("\n"),
    after: after.join("\n"),
  };
}

(async () => {
  try {
    const files = await getPullRequestFiles();
    for (const file of files) {
      const changes = `Changes in \`${file.filename}\`:\n\n\`\`\`${file.patch}\`\`\``;
      const cleanChanges = separateAndCleanCode(changes);
      const review = await getReviewFromApiGemini(cleanChanges);
      const body = `Review for changes in \`${file.filename}\`:\n\n${review}`;
      await commentOnPullRequest(body);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();
