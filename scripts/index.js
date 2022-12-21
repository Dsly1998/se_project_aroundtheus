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

function createCardElelement(card) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card__content");
  const cardContent = document.querySelector(".card__content");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardTitle.textContent = card.name;

  return cardElement;
}

function renderCard(card, wrapper) {
  wrapper.append(createCardElelement(card));
}

initialCards.forEach((card) => renderCard(card, placesList));

const profileEditOpen = document.querySelector(".profile__button-edit");
const modalElement = document.querySelector(".modal");
const profileModalClose = modalElement.querySelector(".modal__button-exit");
const profileEditForm = document.querySelector("#modal-edit-form");
const profileNameTitle = document.querySelector(".profile__title");
const profileJobTitle = document.querySelector(".profile__title-description");
const nameInput = document.querySelector(".modal__input-name");
const jobInput = document.querySelector(".modal__input-description");

const cardAddButton = document.querySelector(".profile__button");
const cardModalElement = document.querySelector("#modal-card-add");
const cardAddClose = cardModalElement.querySelector(".modal__button-exit");
const cardAddForm = document.querySelector(".modal__form");

function closeModal(modal) {
  modal.classList.add("modal");
}

function openModal(modal) {
  modal.classList.remove("modal");
}

profileEditOpen.addEventListener("click", () => {
  nameInput.value = profileNameTitle.textContent;
  jobInput.value = profileJobTitle.textContent;
  openModal(modalElement);
});

profileModalClose.addEventListener("click", function () {
  closeModal(modalElement);
});

profileEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = event.target.name.value;
  const descriptionValue = event.target.description.value;
  profileNameTitle.textContent = nameValue;
  profileJobTitle.textContent = descriptionValue;
  closeModal(modalElement);
});

cardAddButton.addEventListener("click", () => {
  openModal(cardModalElement);
});

cardAddClose.addEventListener("click", function () {
  closeModal(cardModalElement);
});

cardAddForm.addEventListener("submit", function (e) {
  e.preventDefault();
  createCardElelement(cardAddForm);
  const title = e.target.title.value;
  const link = e.target.link.value;
  closeModal(cardModalElement);
});
