window.onscroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  document.getElementById("progress").style.width = (winScroll / height) * 100 + "%";
};