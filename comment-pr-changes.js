const axios = require("axios");
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const OpenAI = require("openai");
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
  try {
    const res = await axios.post(
      "https://api.aimlapi.com/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: "Tell me a joke",
          },
        ],
        max_tokens: 512,
        stream: false,
      },
      {
        headers: {
          Authorization: "Bearer 6ebf6933be6e4defa5d4e980a09dce86",
          ContentType: "application/json",
        },
      }
    );
    return res.data;
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
