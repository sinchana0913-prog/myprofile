const btn = document.createElement("button");
btn.innerText = "↑";
btn.className = "fixed bottom-6 left-6 bg-indigo-500 px-3 py-2 rounded hidden";
document.body.appendChild(btn);

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });