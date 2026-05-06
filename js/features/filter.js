function filterProjects(type) {
  if (type === "All") return renderProjects(projects);

  const filtered = projects.filter(p => p.tech === type);
  renderProjects(filtered);
}