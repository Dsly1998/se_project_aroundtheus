import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
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

///////////queryselectors///////
const placesList = document.querySelector(".card");
const profileEditOpen = document.querySelector(".profile__button-edit");
const profileModal = document.querySelector("#modal-add"); //pop
const profileModalClose = profileModal.querySelector(".modal__button-exit");
const profileEditForm = document.querySelector("#modal-edit-form"); //section
const profileNameTitle = document.querySelector(".profile__title");
const profileJobTitle = document.querySelector(".profile__title-description");
const imageModal = document.querySelector("#image-modal"); //img
const cardAddButton = document.querySelector(".profile__button");
const cardModalElement = document.querySelector("#modal-card-add"); //form
const cardAddClose = cardModalElement.querySelector(".modal__button-exit");
const cardAddForm = document.querySelector("#modal-card-form"); //section
const imageCloseButton = imageModal.querySelector(".modal__button-exit");
const profileName = document.querySelector("#name");
const profileDescription = document.querySelector("#description");

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-visible",
};

const popupConfig = {
  editFormPopupSelector: "#modal-add",
  addCardPopupSelector: "#modal-card-add",
};

const cardPreview = new PopupWithImage({ popupSelector: "#image-modal" });

const createCard = (name, link) => {
  const card = new Card(
    {
      name: name,
      link: link,
      handleImageClick: (name, link) => {
        cardPreview.open(name, link);
      },
    },
    "#card-template"
  );
  return card.getView();
};

const addFormValidator = new FormValidator(settings, cardAddForm);
const addeditFormValidator = new FormValidator(settings, profileEditForm);
addFormValidator.enableValidation();
addeditFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  titleSelector: ".profile__title-description",
});

const editFormPopup = new PopupWithForm({
  popupSelector: popupConfig.editFormPopupSelector,
  handleFormSubmit: (data) => {
    const name = data.name;
    const description = data.description;
    userInfo.setUserInfo({ name: name, description: description });
    editFormPopup.close();
  },
});

const addCardPopup = new PopupWithForm({
  popupSelector: popupConfig.addCardPopupSelector,
  handleFormSubmit: function (data) {
    section.addItem(createCard(data.name, data.link));
    addCardPopup.close();
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

function reneder(data) {
  const card = new Card(data, "#card-template");
  placesList.append(card.getView());
}

editFormPopup.setEventListener();

cardPreview.setEventListener();

addCardPopup.setEventListener();

profileModalClose.addEventListener("click", function () {
  editFormPopup.close();
});

imageCloseButton.addEventListener("click", function () {
  cardPreview.close();
});

cardAddClose.addEventListener("click", function () {
  editFormPopup.close();
});

cardAddClose.addEventListener("click", function () {
  addCardPopup.close();
});

const openProfileEdit = () => {
  profileName.value = userInfo.getUserInfo().name;
  profileDescription.value = userInfo.getUserInfo().description;
  addeditFormValidator.resetValidation();
  editFormPopup.open();
};

const openCardAdd = () => {
  addCardPopup.open();
};

profileEditOpen.addEventListener("click", openProfileEdit);

cardAddButton.addEventListener("click", openCardAdd);
