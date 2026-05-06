window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if (window.scrollY > sec.offsetTop - 200) {
      sec.style.opacity = 1;
    } else {
      sec.style.opacity = 0.5;
    }
  });
});