function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.className = "fixed bottom-5 right-5 bg-black text-white p-3";
  setTimeout(() => t.innerText = "", 3000);
}


