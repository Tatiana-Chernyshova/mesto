import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._popupSubmitButton = this._popup.querySelector('.popup__submit');
    this._defaultSubmitButtonText = this._popupSubmitButton.textContent;
    this._form = this._popup.querySelector('.popup_type_form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  _getInputValues() {
    const values = {};
    const inputs = [...this._inputList];
    inputs.forEach(input => values[input.name] = input.value);
    return values;
  }

  renderLoading(isLoading, message = 'Сохранение...') {
    if (isLoading) {
      this._popupSubmitButton.textContent = message;
    } else {
      this._popupSubmitButton.textContent = this._defaultSubmitButtonText;
    }
  }
}
