export default class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._namevalue = document.querySelector(nameSelector);
    this._descriptionvalue = document.querySelector(titleSelector);
  }

  getUserInfo() {
    return {
      name: this._namevalue.textcontent,
      descrtiption: this._titleSelector,
    };
  }

  setUserInfo({ name, description }) {
    this._namevalue.textcontent = name;
    this._descriptionvalue.textcontent = description;
  }
}
