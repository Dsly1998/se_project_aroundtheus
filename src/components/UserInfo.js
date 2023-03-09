export default class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._namevalue = document.querySelector(nameSelector);
    this._descriptionvalue = document.querySelector(titleSelector);
  }

  getUserInfo() {
    return {
      name: this._namevalue.textContent,
      description: this._descriptionvalue.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._namevalue.textContent = name;
    this._descriptionvalue.textContent = description;
  }
}
