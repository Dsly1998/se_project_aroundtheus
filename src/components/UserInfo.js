export default class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._namevalue = document.querySelector(nameSelector);
    this._descriptionvalue = document.querySelector(titleSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textcontent,
      descrtiption: this._titleSelector,
    };
  }

  setUserInfo({ name, descrtiption }) {
    this._namevalue.textcontent = name;
    this._descriptionvalue.textcontent = descrtiption;
  }
}
