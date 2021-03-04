import { Card } from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

const selectors = {
  formSelector: '.popup',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputErrorClassActive: 'popup__input-error_active',
};

const overlays = document.querySelectorAll('.page__overlay');
const overlayLook = document.querySelector('.page__overlay_type_look');
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

function openPopup (popup) {
  document.addEventListener('keydown', (evt) => {handleEsc(evt, popup)});
  popup.classList.add('page__overlay_active');
}

function closePopup (popup) {
  document.removeEventListener('keydown', handleEsc);
  popup.classList.remove('page__overlay_active');
}

function handleEsc (evt, formElement) {
  if (evt.key === 'Escape') {
    closePopup(formElement);
  }
}

function handleOverlaysItem (overlay) {
  overlay.addEventListener('click', handleOverlay);
}

function handleOverlay (event) {
  if (event.target === event.currentTarget) { 
    closePopup(event.target);
  };
}

function openPopupAdd () {
  const formValidator = new FormValidator(selectors, '.popup_do_add');
  const validation = formValidator.enableValidation();
  const clear = formValidator.clearForm(overlayAdd);
  openPopup(overlayAdd);
}

function openPopupEdit () {
  const formValidator = new FormValidator(selectors, '.popup_do_edit');
  const validation = formValidator.enableValidation();
  const clear = formValidator.clearForm(overlayEdit);
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
  const card = new Card(myObject, '.elements__item');
  const cardElement = card.generateCard();
  document.querySelector('.content__elements').prepend(cardElement);
  closePopup(overlayAdd);
}

overlays.forEach (popup => {
  popup.querySelector('.popup__button_close').addEventListener('click', () => closePopup(popup));
  handleOverlaysItem(popup);
});

initialCards.forEach((item) => {
  const card = new Card(item, '.elements__item');
  const cardElement = card.generateCard();
  document.querySelector('.content__elements').append(cardElement);
});

buttonAdd.addEventListener('click', openPopupAdd);
buttonEdit.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit', handleFormSubmitEdit);
formAdd.addEventListener('submit', handleFormSubmitAdd);

export { openPopup, overlayLook };