class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._handleImageClick = data.handleImageClick;
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
      .addEventListener("click", () =>
        this._handleImageClick(this._name, this._link)
      );
  }

  _handleLikeButton() {
    this.element
      .querySelector(".card__like-image")
      .classList.toggle("card__like-image_active");
  }

  _handleDeleteButton() {
    this.element.remove();
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
