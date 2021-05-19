const escCode = 'Escape';
const buttonEdit = document.querySelector('.profile__button_edit');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__about');
const buttonAdd = document.querySelector('.profile__button_add');
const contentElements = '.content__elements';

const selectors = {
  formSelector: '.popup',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputErrorClassActive: 'popup__input-error_active',
};

export { escCode, buttonEdit, name, job, buttonAdd, contentElements, selectors };
