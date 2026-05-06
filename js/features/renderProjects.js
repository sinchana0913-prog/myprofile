function renderProjects(data) {
  const container = document.getElementById("projects");

  container.innerHTML = data.map(p => `
    <div class="card">
      <h3 class="text-xl font-bold">${p.title}</h3>
      <p>${p.desc}</p>
      <span class="text-gray-400">${p.tech}</span>
    </div>
  `).join("");
}

renderProjects(projects);