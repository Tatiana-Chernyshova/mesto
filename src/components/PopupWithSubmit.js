import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup { 

  constructor(popupSelector, deleteCard) {
    super(popupSelector);
    this._deleteCard = deleteCard;
    this._formDelete = document.querySelector('.popup_do_delete');
    
  }

open(id, card) {
    super.open()
    this._currentCard = id;
    this._element = card;
  }

setEventListeners() {
    super.setEventListeners();
    this._formDelete.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._deleteCard(this._currentCard, this._element);
    })
  }
}