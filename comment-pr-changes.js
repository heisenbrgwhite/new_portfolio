const axios = require("axios");
// const { GoogleGenerativeAI } = require("@google/generative-ai");
const { OpenAI } = require("openai");
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
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

async function getReviewFromApi(changes) {
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
    console.error(`Error: ${error.message}`);
  }
}

(async () => {
  try {
    const files = await getPullRequestFiles();
    for (const file of files) {
      const changes = `Changes in \`${file.filename}\`:\n\n\`\`\`${file.patch}\`\`\``;
      const review = await getReviewFromApi(changes);
      const body = `Review for changes in \`${file.filename}\`:\n\n${review}`;
      await commentOnPullRequest(review);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();
