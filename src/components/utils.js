export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal__open");
    closeModal(openedModal);
  }
}

export function closeModal(modal) {
  modal.classList.remove("modal__open");
  document.removeEventListener("keydown", closeByEscape);
}

export function openModal(modal) {
  modal.classList.add("modal__open");
  document.addEventListener("keydown", closeByEscape);
}
