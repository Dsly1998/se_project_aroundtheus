import Popup from "./popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._title = document.querySelector("card__title");
    this._image = document.querySelector(".card__image");
  }

  open(name, link) {
    this._title.textcontent = name;
    this._image.src = link;
    super.open();
  }
}
