function showInputError() {}

function checkInputValidtity(formElement, inputElements, options) {
  if (!inputElements.Validtity.valid) {
    showInputError(formElement, inputElements, options);
  } else {
    hideInputError(formElement, inputElements, options);
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  inputElements.forEach((inputElements) => {
    inputElements.addEventListener("input", (e) => {
      checkInputValidtity(formElement, inputElements, options);
    });
  });
}

function enableValidation(options) {
  const formElement = [...document.querySelectorAll(options.formSelector)];
  formElement.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
