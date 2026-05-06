const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("bg-white", "text-black");
}

document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("text-black");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("bg-white") ? "light" : "dark"
  );
};