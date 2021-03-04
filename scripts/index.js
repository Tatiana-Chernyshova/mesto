import { initialCards } from './validate.js';
import { openPopup, closePopup } from './utils.js';
import { Card } from './Card.js';
import FormValidator from './FormValidator.js';

const selectors = {
  formSelector: '.popup',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputErrorClassActive: 'popup__input-error_active',
};

const overlays = document.querySelectorAll('.page__overlay');
const overlayAdd = document.querySelector('.page__overlay_type_add');
const overlayEdit = document.querySelector('.page__overlay_type_edit');
const buttonEdit = document.querySelector('.profile__button_edit');
const nameInput = overlayEdit.querySelector('.popup__input_el_name');
const jobInput = overlayEdit.querySelector('.popup__input_el_about');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__about');
const formEdit = document.querySelector('.popup_do_edit');
const formAdd = document.querySelector('.popup_do_add');
const buttonAdd = document.querySelector('.profile__button_add');
const captionInput = overlayAdd.querySelector('.popup__input_el_caption');
const imageInput = overlayAdd.querySelector('.popup__input_el_image');
const formValidatorAdd = new FormValidator(selectors, '.popup_do_add');
const formValidatorEdit = new FormValidator(selectors, '.popup_do_edit');
const contentElements = document.querySelector('.content__elements')

function handleOverlaysItem (overlay) {
  overlay.addEventListener('mousedown', handleOverlay);
}

function handleOverlay (event) {
  if (event.target === event.currentTarget) { 
    closePopup(event.target);
  };
}

function openPopupAdd () {
  const validation = formValidatorAdd.enableValidation();
  formValidatorAdd.clearForm(overlayAdd);
  openPopup(overlayAdd);
}

function openPopupEdit () {
  const validation = formValidatorEdit.enableValidation();
  formValidatorEdit.clearForm(overlayEdit);
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(overlayEdit);
}

function handleFormSubmitEdit (evt) {
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(overlayEdit);
}

function handleFormSubmitAdd (evt) {
  const myObject = {
    name: captionInput.value,
    link: imageInput.value};
  captionInput.value = '';
  imageInput.value = '';
  const card = new Card(myObject, '.template');
  const cardElement = card.generateCard();
  contentElements.prepend(cardElement);
  closePopup(overlayAdd);
}

overlays.forEach (popup => {
  popup.querySelector('.popup__button_close').addEventListener('click', () => closePopup(popup));
  handleOverlaysItem(popup);
});

initialCards.forEach((item) => {
  const card = new Card(item, '.template');
  const cardElement = card.generateCard();
  contentElements.append(cardElement);
});

buttonAdd.addEventListener('click', openPopupAdd);
buttonEdit.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit', handleFormSubmitEdit);
formAdd.addEventListener('submit', handleFormSubmitAdd);

// export { openPopup, overlayLook };