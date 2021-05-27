const buttonEdit = document.querySelector('.profile__button_edit');
const nameInput = document.querySelector('.popup__input_el_name');
const aboutInput = document.querySelector('.popup__input_el_about');
const buttonAdd = document.querySelector('.profile__button_add');
const contentElements = '.content__elements';
const avatarInput = document.querySelector('.popup__input_el_image-avatar');
const buttonEditAvatar = document.querySelector('.profile__avatar-edit');

const selectors = {
  formSelector: '.popup',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputErrorClassActive: 'popup__input-error_active',
};

export { buttonEdit, buttonAdd, contentElements, selectors, nameInput, aboutInput, avatarInput, buttonEditAvatar };