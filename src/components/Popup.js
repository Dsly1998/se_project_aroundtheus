export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal__open");
      close(openedModal);
    }
  }

  setEventListener() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__open")
      ) {
        this.close();
      }
    });

    this._popupElement.addEventListener("click", function () {
      this.close();
    });
    
  }

  open() {
    this._popupElement.classList.add("modal__open");
    document.addEventListener("keydown", this._handleEscUp);
  }

  close() {
    this._popupElement.classList.remove("modal__open");
    document.addEventListener("keydown", this._handleEscUp);
  }
}
