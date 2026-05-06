fetch("https://github.com/sinchana0913-prog/MERN_Stu_FebMay26Mys")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("github");

    container.innerHTML = data.slice(0,5).map(repo => `
      <div class="card">
        <h3>${repo.name}</h3>
        <p>⭐ ${repo.stargazers_count}</p>
      </div>
    `).join("");
  });