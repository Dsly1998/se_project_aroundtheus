import Popup from "./popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._title = this._popupElement.querySelector(".modal__image-description");
    this._image = this._popupElement.querySelector(".modal__preview-image");
  }

  open(name, link) {
    this._title.textcontent = name;
    this._image.src = link;
    this._image.alt = name;
    super.open();
  }
}
