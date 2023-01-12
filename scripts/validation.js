//
//

function showInputError(
  formElement,
  inputElements,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    "#" + inputElements.id + "-error"
  );
  inputElements.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElements.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElements,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    "#" + inputElements.id + "-error"
  );
  inputElements.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(errorClass);
}

function checkInputValidity(formElement, inputElements, options) {
  if (!inputElements.validity.valid) {
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
      checkInputValidity(formElement, inputElements, options);
      console.log("listening running");
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
