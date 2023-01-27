class card {
  constructor(card, cardTemplate) {
    this._name = e.target.name.value;
    this._link = e.target.link.value;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card__content");
  }
}

export default card;
