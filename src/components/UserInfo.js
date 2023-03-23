export default class UserInfo {
  constructor({ nameSelector, titleSelector, avatar }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(titleSelector);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._descriptionElement.textContent,
      avatar: this._avatar,
    };
  }

  setUserInfo({ name, about, avatar }) {
    console.log(avatar);
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._avatar.src = avatar;
  }
}
