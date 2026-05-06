function openModal(p) {
  document.getElementById("modal").classList.remove("hidden");
  modalTitle.innerText = p.title;
  modalDesc.innerText = p.desc;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}