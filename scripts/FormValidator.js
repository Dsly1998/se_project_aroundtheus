export default class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.inputSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this.form = formElement;
  }

  _showInputError(inputElements) {
    const errorMessageElement = this.form.querySelector(
      "#" + inputElements.id + "-error"
    );
    inputElements.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = inputElements.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _toggleButtonState(inputElements, submitButton) {
    let foundInvalid = false;

    inputElements.forEach((inputEl) => {
      if (!inputEl.validity.valid) {
        foundInvalid = true;
      }
    });

    if (foundInvalid) {
      submitButton.classList.add(this._inactiveButtonClass);
      return (submitButton.disabled = true);
    }
    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.disabled = false;
  }

  _hideInputError(inputElements) {
    const errorMessageElement = this.form.querySelector(
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
    const inputElements = [...this.form.querySelectorAll(this._inputSelector)];
    const submitButton = this.form.querySelector(this._submitButtonSelector);
    submitButton.disabled = true;
    this._toggleButtonState(inputElements, submitButton);
    this.form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonState(inputElements, submitButton);
      }, 0);
    });
    inputElements.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState(inputElements, submitButton);
      });
    });
  }

  enableValidation() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
