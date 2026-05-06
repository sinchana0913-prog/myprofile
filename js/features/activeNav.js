const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav button");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.id;
    }
  });

  navLinks.forEach(btn => {
    btn.classList.remove("text-green-400");
    if (btn.innerText.toLowerCase().includes(current)) {
      btn.classList.add("text-green-400");
    }
  });
});