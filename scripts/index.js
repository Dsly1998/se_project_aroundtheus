import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { closeByEscape, closeModal, openModal } from "./utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    alt: "Yosemite Valley",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    alt: "Lake Louise",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    alt: "Bald Mountains",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    alt: "Latemar",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    alt: "Vanoise National Park",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    alt: "Lago di Braies",
  },
];

const placesList = document.querySelector(".card");
const cardSelector = document.querySelector("#card-template");

function renderCard(data) {
  const card = new Card(data, "#card-template");
  placesList.append(card.getView());
}

initialCards.forEach(renderCard);

const profileEditOpen = document.querySelector(".profile__button-edit");
const profileModal = document.querySelector("#modal-add");
const profileModalClose = profileModal.querySelector(".modal__button-exit");
const profileEditForm = document.querySelector("#modal-edit-form");
const profileNameTitle = document.querySelector(".profile__title");
const profileJobTitle = document.querySelector(".profile__title-description");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#description");
const imageModal = document.querySelector("#image-modal");
const cardAddButton = document.querySelector(".profile__button");
const cardModalElement = document.querySelector("#modal-card-add");
const cardAddClose = cardModalElement.querySelector(".modal__button-exit");
const cardAddForm = document.querySelector("#modal-card-form");
const imageCloseButton = imageModal.querySelector(".modal__button-exit");

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-visible",
};
const addformElement = document.querySelector("#modal-card-form");
const addEditFormEl = document.querySelector("#modal-edit-form");
const addFormValidator = new FormValidator(settings, addformElement);
const addeditFormValidator = new FormValidator(settings, addEditFormEl);
addFormValidator.enableValidation();
addeditFormValidator.enableValidation();

profileModal.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__open")
  ) {
    closeModal(profileModal);
  }
});

cardModalElement.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__open")
  ) {
    closeModal(cardModalElement);
  }
});

imageModal.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__open")
  ) {
    closeModal(imageModal);
  }
});

profileEditOpen.addEventListener("click", () => {
  nameInput.value = profileNameTitle.textContent;
  jobInput.value = profileJobTitle.textContent;
  openModal(profileModal);
});

profileModalClose.addEventListener("click", function () {
  closeModal(profileModal);
});

imageCloseButton.addEventListener("click", function () {
  closeModal(imageModal);
});

profileEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = event.target.name.value;
  const descriptionValue = event.target.description.value;
  profileNameTitle.textContent = nameValue;
  profileJobTitle.textContent = descriptionValue;
  closeModal(profileModal);
});

cardAddButton.addEventListener("click", () => {
  openModal(cardModalElement);
});

cardAddClose.addEventListener("click", function () {
  closeModal(cardModalElement);
});

cardAddForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.name.value;
  const link = e.target.link.value;
  const card = new Card({ name: name, link: link }, "#card-template");
  placesList.prepend(card.getView());
  closeModal(cardModalElement);
  cardAddForm.reset();
});
