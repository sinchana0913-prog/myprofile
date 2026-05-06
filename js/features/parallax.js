window.addEventListener("scroll", () => {
  document.querySelector("section").style.backgroundPositionY =
    window.scrollY * 0.5 + "px";
});