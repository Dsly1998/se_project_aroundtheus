class section {
    constructor(items, {renderer}){
        this._name = items.name;
        this._link = items.link;
        this._alt = items.alt
        this.renderItems = renderer
    }
}
this.renderItems.addEventListener("submit", function (e) {
    e.preventDefault();
    const card = new Card(this._name, this._link, "#card-template");
    placesList.prepend(card.getView());
    closeModal(cardModalElement);
    cardAddForm.reset();
  });
  