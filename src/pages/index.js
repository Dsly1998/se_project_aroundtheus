import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo";
import Section from "../components/Section";
import Api from "../components/api";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

/////api autherization//////
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "7279c0be-4bdd-49b0-9b2c-1082aa2638f0",
    "Content-Type": "application/json",
  },
});

let userId = null;

api
  .getData()
  .then(([userData, cards]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
    userInfo.setUserAvatar({
      avatar: userData.avatar,
    });
    userId = userData._id;
    section.renderItems(cards);
  })
  .catch((error) => {
    console.log(error);
  });

///////////queryselectors///////
const profileEditOpen = document.querySelector(".profile__button-edit");
const profileEditForm = document.querySelector("#modal-edit-form");
const cardAddButton = document.querySelector(".profile__button");
const cardAddForm = document.querySelector("#modal-card-form");
const profileName = document.querySelector("#name");
const profileDescription = document.querySelector("#about");
const avatarPopupOpen = document.querySelector(".profile__image-button");
const avatarEditPopup = document.querySelector("#modal-avatar-form");
const profileImage = document.querySelector(".profile__image");

///// data ojects///////
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
  deleteCardPopupSelector: "#modal-delete",
  avatarPopupSelector: "#modal-avatar-add",
};

//////////image preview///////
const cardPreview = new PopupWithImage({ popupSelector: "#image-modal" });

//////////delete card modal////
const cardRemove = new PopupWithConfirmation({
  popupSelector: "#modal-delete",
});

/////////card build/////////
const createCard = (cardData) => {
  const card = new Card(
    {
      cardData,
      userId,
      handleImageClick: (name, link) => {
        cardPreview.open(name, link);
      },
      handleDeleteCard: () => {
        cardRemove.open();
        cardRemove.setSubmitAction(() => {
          cardRemove.setLoading(true);
          api
            .removeCard(card.getId())
            .then((res) => {
              card.removeCard();
              cardRemove.close();
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              cardRemove.setLoading(false, "yes");
            });
        });
      },
      handleLikeButton: () => {
        if (card.isLiked()) {
          api
            .removeLike(card.getId())
            .then((res) => {
              card.setLikesInfo(res.likes);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          api
            .addLike(card.getId())
            .then((res) => {
              card.setLikesInfo(res.likes);
            })
            .catch((error) => {
              console.log("Error adding like:", error);
            });
        }
      },
    },
    "#card-template"
  );
  return card.getView();
};

///////form Validator///////
const addFormValidator = new FormValidator(settings, cardAddForm);
const addEditFormValidator = new FormValidator(settings, profileEditForm);
const avatarFormValidator = new FormValidator(settings, avatarEditPopup);
addFormValidator.enableValidation();
addEditFormValidator.enableValidation();
avatarFormValidator.enableValidation();

///////User Info//////////
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  titleSelector: ".profile__title-description",
  avatar: ".profile__image",
});

///////edit popup//////
const editFormPopup = new PopupWithForm({
  popupSelector: popupConfig.editFormPopupSelector,

  handleFormSubmit: (data) => {
    editFormPopup.setLoading(true);
    api
      .saveUserInfo({
        name: data.name,
        about: data.about,
      })
      .then(() => {
        userInfo.setUserInfo({
          name: data.name,
          about: data.about,
        });
        editFormPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editFormPopup.setLoading(false, "Save");
      });
  },
});
////////avatar popup////

const avatarPopup = new PopupWithForm({
  popupSelector: popupConfig.avatarPopupSelector,
  handleFormSubmit: (data) => {
    avatarPopup.setLoading(true);
    api
      .updateProfileImage(data)
      .then((data) => {
        userInfo.setUserAvatar(data);
        avatarPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarPopup.setLoading(false, "Save");
      });
  },
});

//////add card popup/////////
const addCardPopup = new PopupWithForm({
  popupSelector: popupConfig.addCardPopupSelector,
  handleFormSubmit: function (data) {
    addCardPopup.setLoading(true);
    api
      .saveAddCard(data)
      .then((data) => {
        addCardPopup.close();
        section.addItem(createCard(data));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        addCardPopup.setLoading(false, "Create");
      });
  },
});

///////section class/////////
const section = new Section(
  {
    renderer: (data) => {
      const card = createCard(data);
      section.addItem(card);
    },
  },
  ".card"
);

///////popup event listeners/////
editFormPopup.setEventListener();

cardPreview.setEventListener();

addCardPopup.setEventListener();

cardRemove.setEventListener();

avatarPopup.setEventListener();

////// open modals ///////////
const openProfileEdit = () => {
  const { name: name, about: about } = userInfo.getUserInfo();
  profileName.value = name;
  profileDescription.value = about;
  addEditFormValidator.resetValidation();
  editFormPopup.open();
};

const openCardAdd = () => {
  addFormValidator.resetValidation();
  addCardPopup.open();
};

const openAvatarPopup = () => {
  avatarFormValidator.resetValidation();
  avatarPopup.open();
};

//////add event listeners////
profileEditOpen.addEventListener("click", openProfileEdit);

cardAddButton.addEventListener("click", openCardAdd);

avatarPopupOpen.addEventListener("click", openAvatarPopup);

profileImage.addEventListener("click", openAvatarPopup);
