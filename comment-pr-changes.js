const axios = require("axios");
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

(async () => {
  try {
    const files = await getPullRequestFiles();
    for (const file of files) {
      const body = `Changes in \`${file.filename}\`:\n\n\`\`\`${file.patch}\`\`\``;
      await commentOnPullRequest(body);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();
