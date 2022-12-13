const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const placesList = document.querySelector(".card");
initialCards.forEach((card) => {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card__content");
  const cardContent = document.querySelector(".card__content");
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  console.log(cardImage);
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = card.link;
  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;
  placesList.append(cardElement);
});

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
