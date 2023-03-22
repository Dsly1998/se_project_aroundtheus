import Popup from "./popup";

export default class RemoveCard extends Popup {
  setSubmitAction(callBack) {
    this._handleFormSubmit = callBack;
  }

  setEventListener() {
    super.setEventListener();
    this._popupElement
      .querySelector(".modal__form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        this._handleFormSubmit();
      });
  }
}
