import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { closeByEscape, closeModal, openModal } from "../components/utils.js";
import Popup from "../components/popup";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo";
import Section from "../components/Section";

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

const popupConfig = {
  editFormPopupSelector: "#modal-add",
};

const placesList = document.querySelector(".card");

function renderCard(data) {
  const card = new Card(data, "#card-template");
  placesList.append(card.getView());
}

initialCards.forEach(renderCard);

const profileEditOpen = document.querySelector(".profile__button-edit");
const profileModal = document.querySelector("#modal-add"); //pop
const profileModalClose = profileModal.querySelector(".modal__button-exit");
const profileEditForm = document.querySelector("#modal-edit-form"); //section
const profileNameTitle = document.querySelector(".profile__title");
const profileJobTitle = document.querySelector(".profile__title-description");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#description");
const imageModal = document.querySelector("#image-modal"); //img
const cardAddButton = document.querySelector(".profile__button");
const cardModalElement = document.querySelector("#modal-card-add"); //form
const cardAddClose = cardModalElement.querySelector(".modal__button-exit");
const cardAddForm = document.querySelector("#modal-card-form"); //section
const imageCloseButton = imageModal.querySelector(".modal__button-exit");

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-visible",
};

const createCard = (name, link) => {
  const card = new Card({ name: name, link: link }, "#card-template");
  return card.getView();
};

const addFormValidator = new FormValidator(settings, cardAddForm);
const addeditFormValidator = new FormValidator(settings, profileEditForm);
addFormValidator.enableValidation();
addeditFormValidator.enableValidation();

const editPopup = new Popup({ popupSelector: "#modal-add" });
const cardPopup = new Popup({ popupSelector: "#modal-card-add" });
const cardPreview = new PopupWithImage({ popupSelector: "#image-modal" });

const userInfo = new UserInfo({
  nameSelector: "#name",
  titleSelector: "#description",
});

const formPopup = new PopupWithForm({
  popupSelector: popupConfig.editFormPopupSelector,
  handleFormSubmit: (data) => {
    console.log(test);
    const name = data.name;
    const description = data.description;
    userInfo.setUserInfo({ name: name, description: description });
  },
});

const section = new Section(
  {
    renderer: (data) => {
      const card = createCard(data.name, data.link);
      section.addItem(card);
    },
  },
  ".card"
);
section.renderItems(initialCards);
/*cardModalElement.addEventListener("mousedown", (evt) => {
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
});*/

const openProfileEdit = () => {
  profileNameTitle.value = userInfo.getUserInfo().name;
  profileJobTitle.value = userInfo.getUserInfo().descrtiption;
  profileModal.open;
};

profileEditOpen.addEventListener("click", openProfileEdit);

cardAddButton.addEventListener("click", () => {
  cardAddForm.open;
});
