import Popup from './Popup.js';

export default class PopupWithImage extends Popup{

  open (url, text) {
    this._popup.querySelector('.popup__image').src = url;
    this._popup.querySelector('.popup__caption').textContent = text;
    this._popup.querySelector('.popup__image').alt = text;
    super.open();
  }
}
