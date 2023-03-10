export default class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.inputSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  _showInputError(inputElements) {
    const errorMessageElement = this._form.querySelector(
      "#" + inputElements.id + "-error"
    );
    inputElements.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = inputElements.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _checkFormValidity = () =>
    this._inputElements.every((input) => input.validity.valid);

  _toggleButtonState() {
    const isFormValid = this._checkFormValidity();

    if (isFormValid) {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._inactiveButtonClass);
    }
  }

  _hideInputError(inputElements) {
    const errorMessageElement = this._form.querySelector(
      "#" + inputElements.id + "-error"
    );
    inputElements.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      return this._showInputError(inputElement);
    }
    this._hideInputError(inputElement);
  }

  _setEventListeners() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();

    this._inputElements.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
