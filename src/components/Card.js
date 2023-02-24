import { openModal } from "../components/utils.js";

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
    this._imageModal = document.querySelector("#image-modal");
  }

  _setEventListeners(_handleLikeButton) {
    this.element
      .querySelector(".card__title-button")
      .addEventListener("click", () => this._handleLikeButton());

    this.element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteButton());

    this.element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handleImagePreviw());
  }

  _handleLikeButton() {
    this.element
      .querySelector(".card__like-image")
      .classList.toggle("card__like-image_active");
  }

  _handleDeleteButton() {
    this.element.remove();
  }

  _handleImagePreviw() {
    document.querySelector(".modal__image-description").textContent =
      this._name;
    document.querySelector(".modal__preview-image").src = this._link;
    document.querySelector(".modal__preview-image").alt = this._alt;
    openModal(this._imageModal);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__content")
      .cloneNode(true);
  }

  getView() {
    this.element = this._getTemplate();

    this.element.querySelector(".card__image").src = this._link;
    this.element.querySelector(".card__image").alt = this._alt;
    this.element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();

    return this.element;
  }
}

export default Card;
