import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/popup";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo";
import Section from "../components/Section";
import Api from "../components/api";

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "7279c0be-4bdd-49b0-9b2c-1082aa2638f0",
    "Content-Type": "application/json",
  },
});

///////////queryselectors///////
const profileEditOpen = document.querySelector(".profile__button-edit");
const profileModal = document.querySelector("#modal-add"); //pop
const profileModalClose = profileModal.querySelector(".modal__button-exit");
const profileEditForm = document.querySelector("#modal-edit-form"); //section
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
  avatar: ".profile__image",
});

api.getUserInfo().then((userData) => {
  userInfo.setUserInfo({
    about: userData.name,
    name: userData.about,
    avatar: userData.avatar,
  });
});

const editFormPopup = new PopupWithForm({
  popupSelector: popupConfig.editFormPopupSelector,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo({
      name: data.name,
      about: data.about,
      avatar: data.avatar,
    });
    editFormPopup.close();
  },
});

const addCardPopup = new PopupWithForm({
  popupSelector: popupConfig.addCardPopupSelector,
  handleFormSubmit: function (data) {
    addCardPopup.close();
    addFormValidator.resetValidation();
    section.addItem(createCard(data.name, data.link));
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

api.getInitialCards().then((cards) => section.renderItems(cards));

api.getUserInfo().then((userData) => {
  userInfo.setUserInfo({
    name: userData.name,
    about: userData.about,
    avatar: userData.avatar,
  });
});
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
  const { name: name, about: about } = userInfo.getUserInfo();
  profileName.value = name;
  profileDescription.value = about;
  editFormPopup.open();
};

const openCardAdd = () => {
  addCardPopup.open();
};

profileEditOpen.addEventListener("click", openProfileEdit);

cardAddButton.addEventListener("click", openCardAdd);
