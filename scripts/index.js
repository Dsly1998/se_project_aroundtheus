const initialCards = [
  {
    name: "Yosemite Valley",
    link: "../images/yosemite-valley.png",
  },
  {
    name: "Lake Louise",
    link: "../images/lake-louise.png",
  },
  {
    name: "Bald Mountains",
    link: "../images/bald-mountains.png",
  },
  {
    name: "Latemar",
    link: "../images/latemar.png",
  },
  {
    name: "Vanoise National Park",
    link: "../images/vanoise-national-park.png",
  },
  {
    name: "Lago di Braies",
    link: "../images/lago-di-braies.png",
  },
];

function getCardElement() {}

const profileEditOpen = document.querySelector(".profile__button-edit");
const modalElement = document.querySelector(".modal");
const profileModalClose = document.querySelector(".modal__button-exit");
const profileEditForm = document.querySelector("#edit-profile-form");
const profileNameTitle = document.querySelector(".profile__title");
const profileJobTitle = document.querySelector(".profile__title-description");
const nameInput = document.querySelector(".modal__input-name");
const jobInput = document.querySelector(".modal__input-description");

function closeModal() {
  modalElement.classList.add("modal");
}

function openModal() {
  modalElement.classList.remove("modal");
}

profileEditOpen.addEventListener("click", function () {
  nameInput.value = profileNameTitle.textContent;
  jobInput.value = profileJobTitle.textContent;
  openModal();
});

profileModalClose.addEventListener("click", closeModal);

profileEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = event.target.name.value;
  const descriptionValue = event.target.description.value;
  profileNameTitle.textContent = nameValue;
  profileJobTitle.textContent = descriptionValue;
  closeModal();
});
