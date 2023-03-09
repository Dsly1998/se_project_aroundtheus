export default class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionvalue = document.querySelector(titleSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descriptionvalue.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._nameElement.textContent = name;
    this._descriptionvalue.textContent = description;
  }
}
