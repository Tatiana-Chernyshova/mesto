import Popup from './Popup.js';

export default class PopupWithImage extends Popup{

  open (url, text) {
    this._popup.querySelector('.popup__caption').textContent = text;
    this._imagePopup = this._popup.querySelector('.popup__image');
    this._imagePopup.src = url;
    this._imagePopup.alt = text;
    super.open();
  }
}
