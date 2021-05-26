import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup { 
  // constructor(popupSelector) {
  //   super(popupSelector);
  //   this._submitFormHandler = submitFormHandler;
  //   this._popupForm = this._popup.querySelector('.popup__form');
  //   this._popupSubmitButton = this._popupForm.querySelector('.popup__button-save');
  //   this._defaultSubmitButtonText = this._popupSubmitButton.value;
  // }

  // waitSubmitButton(waitingText) {
  //   this._popupSubmitButton.value = waitingText;
  // }

  // resetWaitSubmitButton() {
  //   this._popupSubmitButton.value = this._defaultSubmitButtonText;
  // }

  // setEventListeners() {
  //   this._popupForm.addEventListener('submit', (event) => {
  //     // this._submitFormHandler(event, this._parametr);
  //   });
  //   this._closeButton.addEventListener('click', () => {
  //     this.close();
  //   })
  // }

  // open(parametr) {
  //   this._parametr = parametr;
  //   super.open();
  // }
  // open (url, text) {
  //   this._popup.querySelector('.popup__caption').textContent = text;
  //   this._imagePopup = this._popup.querySelector('.popup__image');
  //   this._imagePopup.src = url;
  //   this._imagePopup.alt = text;
  //   super.open();
  // }
}