import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaption = this._popup.querySelector('.popup__caption');
    this._imagePopup = this._popup.querySelector('.popup__image');
  }

  open (url, text) {
    this._popupCaption.textContent = text;
    this._imagePopup.src = url;
    this._imagePopup.alt = text;
    super.open();
  }
}
