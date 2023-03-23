import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  _getInputValues() {
    const inputs = this._popupElement.querySelectorAll(".modal__input");
    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListener() {
    super.setEventListener();
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
    });
  }

  setLoading(isLoading, buttonText) {
    const button = this._popupForm.querySelector(".modal__button");
    console.log(button);
    if (isLoading) {
      button.textContent = "Saving...";
    } else {
      button.textContent = buttonText;
    }
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
