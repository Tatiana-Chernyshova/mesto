import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
	}

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
		super.setEventListeners();
    this._form = this._popup.querySelector('.popup_type_form')
    this._form.addEventListener('submit', () => {
			this._submitHandler(this._getInputValues());
      this.close();
		});
	}

  _getInputValues() {
    const values = {};
    const inputs = [...this._form.querySelectorAll('.popup__input')];
    inputs.forEach(input => values[input.name] = input.value);
    return values;
  }
}
