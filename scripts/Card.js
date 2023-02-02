class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
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
      .querySelector(".card__title-button")
      .classList.toggle("card__like-image_active");
  }

  _handleDeleteButton() {
    this.element.remove();
  }

  _handleImagePreviw() {
    document.querySelector(".modal__image-description").textContent = data.name;
    document.querySelector(".modal__preview-image").src = data.link;
    document.querySelector(".modal__preview-image").alt = cardImage.alt;
    openModal(imageModal);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__content")
      .cloneNode(true);
  }

  getView() {
    this.element = this._getTemplate();

    this.element.querySelector(".card__image").src = data.link;
    this.element.querySelector(".card__image").alt = data.alt;
    this.element.querySelector(".card__title").textContent = data.name;

    this._setEventListeners();
  }
}

export default Card;
