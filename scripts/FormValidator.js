export default class FormValidator {
  constructor (data, elForm) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._inputErrorClassActive = data.inputErrorClassActive;

    this._elForm = elForm;
  }

  enableValidation () {
    const formElement = document.querySelector(this._elForm);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(formElement);
  }
  _setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement, formElement);
      });
    });
  }
  _isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }
  _toggleButtonState = (inputList, buttonElement, formElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    };
  }
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    if (!errorElement.textContent) {
      errorElement.textContent = errorMessage;
    }
    errorElement.classList.add(this._inputErrorClassActive);
  }
  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._inputErrorClassActive);
    errorElement.textContent = '';
  }
  clearForm (overlay) { 
    const inputList = Array.from(overlay.querySelectorAll(this._inputSelector));
    const formElement = overlay.querySelector(this._formSelector);
    const buttonElement = overlay.querySelector(this._submitButtonSelector);
    inputList.forEach ((inputItem) => {
      inputItem.value = '';
      this._hideInputError(formElement, inputItem);
      buttonElement.classList.add(this._inactiveButtonClass);
    });
    buttonElement.disabled = true;
  }
}
