export default class UserInfo {
  constructor({ nameSelector, titleSelector, avatar }) {
    this._nameElement = nameSelector;
    this._descriptionElement = titleSelector;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._descriptionElement.textContent,
      avatar: this._avatar,
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._avatar.style.backgroundImage = `url(${avatar})`;
  }
}
