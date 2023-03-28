export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal_open");
      this.close();
    }
  }

  setEventListener() {
    document.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("modal_open") ||
        evt.target.classList.contains("modal__close-button-image")
      ) {
        this.close();
      }
    });
  }

  open() {
    // 2. reset validation
    this._popupElement.classList.add("modal_open");
    document.addEventListener("keydown", this._handleEscUp);
  }

  close() {
    this._popupElement.classList.remove("modal_open");
    document.removeEventListener("keydown", this._handleEscUp);
  }
}
