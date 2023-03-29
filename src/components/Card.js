class Card {
  constructor(
    { cardData, handleImageClick, handleDeleteCard, handleLikeButton, userId },
    cardSelector
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._alt = cardData.name;
    this._id = cardData._id;
    this._ownerId = cardData.owner._id;
    this._userId = userId;
    this._likes = cardData.likes;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeButton = handleLikeButton;
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
      ?.addEventListener("click", () =>
        this._handleDeleteCard(this._name, this._link)
      );

    this.element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleImageClick(this._name, this._link)
      );
  }

  removeCard() {
    this.element.remove();
  }

  isLiked() {
    return this._likes.some((like) => {
      return like._id === this._userId;
    });
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
    this._likeCounter = this.element.querySelector(".card__like-count");
    this._renderLikes();

    if (this._ownerId !== this._userId) {
      this.element.querySelector(".card__delete-button").remove();
    }
    this._setEventListeners();
    return this.element;
  }

  _renderLikes() {
    this._likeCounter.textContent = this._likes.length || "";

    if (this.isLiked()) {
      this.element
        .querySelector(".card__like-image")
        .classList.add("card__like-image_active");
    } else {
      this.element
        .querySelector(".card__like-image")
        .classList.remove("card__like-image_active");
    }
  }

  setLikesInfo(likes) {
    this._likes = likes;
    this._renderLikes();
  }
}

export default Card;
