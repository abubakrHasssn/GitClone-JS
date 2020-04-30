let theInput = document.querySelector(".get-repos input"),
  getButton = document.querySelector(".get-button"),
  reposData = document.querySelector(".show-data");
getButton.onclick = getRepos;

function getRepos() {
  reposData.innerHTML = "";
  if (theInput.value === "") {
    reposData.innerHTML = "<span>Please Enter Gethub Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((repos) => {
        repos.forEach((repo) => {
          let mainDiv = document.createElement("div");
          mainDiv.appendChild(document.createTextNode(repo.name));
          let repoUrl = document.createElement("a");
          repoUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
          repoUrl.appendChild(document.createTextNode("Vist"));
          mainDiv.appendChild(repoUrl);
          let starSpan = document.createElement("span");
          starSpan.appendChild(
            document.createTextNode(`Stars ${repo.stargazers_count}`)
          );
          mainDiv.appendChild(starSpan);

          mainDiv.className = "repo-box";
          reposData.appendChild(mainDiv);
        });
      });
  }
}