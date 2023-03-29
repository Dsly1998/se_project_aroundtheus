import Popup from "./popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }
  setSubmitAction(callBack) {
    this._handleFormSubmit = callBack;
  }

  setEventListener() {
    super.setEventListener();
    this._popupElement
      .querySelector(".modal__form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        this._handleFormSubmit();
      });
  }

  setLoading(isLoading, buttonText) {
    const button = this._popupForm.querySelector(".modal__button");;
    if (isLoading) {
      button.textContent = "Deleting...";
    } else {
      button.textContent = buttonText;
    }
  }
}
