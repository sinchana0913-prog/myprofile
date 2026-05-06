const container = document.getElementById("skills");

container.innerHTML = skills.map(s => `
  <div class="mb-3">
    <p>${s.name}</p>
    <div class="bg-gray-700 w-full">
      <div class="bg-green-400 p-1" style="width:${s.level}%"></div>
    </div>
  </div>
`).join("");