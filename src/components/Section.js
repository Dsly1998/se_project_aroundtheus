export default class Section {
  constructor({ renderer }, elementContainer) {
    this._renderer = renderer;
    this._container = document.querySelector(elementContainer);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
