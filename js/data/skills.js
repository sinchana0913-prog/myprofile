const skills = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];

const skillContainer = document.getElementById("skills");

skillContainer.innerHTML = skills.map(s =>
  `<span class="bg-indigo-500 px-3 py-1 m-1 inline-block rounded">${s}</span>`
).join("");