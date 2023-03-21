class Card {
  constructor(
    { cardData, handleImageClick, handleDeleteCard, handleLikeButton },
    cardSelector
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._alt = cardData.name; // ?
    this._id = cardData._id;
    this._likes_counter = likesCounter;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeButton = cardData.likes.length;
    this._cardSelector = cardSelector;
  }

  getId() {
    return this._id;
  }

  _setEventListeners() {
    this.element
      .querySelector(".card__title-button")
      .addEventListener("click", () => this._handleLikeButton());

    this.element
      .querySelector(".card__delete-button")
      .addEventListener("click", () =>
        this._handleDeleteCard(this._name, this._link)
      );

    this.element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleImageClick(this._name, this._link)
      );
  }

  handleLikeButton() {
    this.element
      .querySelector(".card__like-image")
      .classList.toggle("card__like-image_active");
  }

  handleDeleteButton() {
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
