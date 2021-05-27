export default class Popup {
	constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
	}

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('page__overlay_active');
  }
  
  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('page__overlay_active');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('overlay') || evt.target.classList.contains('popup__button_close')) {
        this.close();
      }
    });
  }
}

