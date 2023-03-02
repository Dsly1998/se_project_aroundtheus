import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector("#modal-add");
    this._form = handleFormSubmit;
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll(".modal__input");
    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
