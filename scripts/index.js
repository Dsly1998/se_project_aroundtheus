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
  const cardButton = cardElement.querySelector(".card__title-button");
  const likeImage = cardElement.querySelector(".card__like-image");
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  const imageModal = document.querySelector("#image-modal");
  const cardPreviewImage = document.querySelector(".modal__preview-image");
  const modalCardDescription = document.querySelector(
    ".modal__image-description"
  );
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardTitle.textContent = card.name;
  cardImage.addEventListener("click", () => {
    modalCardDescription.textContent = card.name;
    cardPreviewImage.src = card.link;
    cardPreviewImage.alt = cardImage.alt;
    openModal(imageModal);
  });
  cardButton.addEventListener("click", () => {
    likeImage.classList.toggle("card__like-image_active");
  });
  deleteCardButton.addEventListener("click", () => {
    cardElement.remove();
  });
  return cardElement;
}

function renderCard(card) {
  placesList.append(createCardElelement(card));
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
const imageModal = document.querySelector("#image-modal");
const cardAddButton = document.querySelector(".profile__button");
const cardModalElement = document.querySelector("#modal-card-add");
const cardAddClose = cardModalElement.querySelector(".modal__button-exit");
const cardAddForm = document.querySelector("#modal-card-form");
const imageCloseButton = imageModal.querySelector(".modal__button-exit");

function closeModal(modal) {
  modal.classList.remove("modal__open");
}

function openModal(modal) {
  modal.classList.add("modal__open");
}

profileEditOpen.addEventListener("click", () => {
  nameInput.value = profileNameTitle.textContent;
  jobInput.value = profileJobTitle.textContent;
  openModal(modalElement);
});

profileModalClose.addEventListener("click", function () {
  closeModal(modalElement);
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
  const name = e.target.name.value;
  const link = e.target.link.value;
  const newCard = createCardElelement({ name: name, link: link });
  placesList.prepend(newCard);
  closeModal(cardModalElement);
  cardAddForm.reset();
});
