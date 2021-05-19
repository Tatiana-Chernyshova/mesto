import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
	constructor(popupSelector) {
    super(popupSelector);
	}

  open (url, text) {
    this._popup.querySelector('.popup__image').src = url;
    this._popup.querySelector('.popup__caption').textContent = text;
    super.open();
  }
}
