import '../pages/index.css';

import { initialCards } from './validate.js';
import { buttonEdit, buttonAdd, contentElements, selectors, nameInput, aboutInput } from './utils.js';
import { Card } from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const formValidatorAdd = new FormValidator(selectors, '.popup_do_add');
const formValidatorEdit = new FormValidator(selectors, '.popup_do_edit');
const editProfilePopup = new PopupWithForm('.page__overlay_type_edit', editProfileSubmitHandler);
const addCardPopup = new PopupWithForm('.page__overlay_type_add', addCardSubmitHandler);
const popupWithImage = new PopupWithImage('.page__overlay_type_look');
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__about' });

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template', cardImageClickHandler);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, contentElements);

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();
popupWithImage.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
cardList.renderItems();

function cardImageClickHandler(url, text) {
  popupWithImage.open(url, text);
}

function addCardSubmitHandler(data) {
  const card = new Card(data, '.template', cardImageClickHandler);
  const cardElement = card.generateCard();
  cardList.prependItem(cardElement);
  this.close();
}

function editProfileSubmitHandler(data) {
  userInfo.setUserInfo(data);
}

buttonAdd.addEventListener('click', () => {
  formValidatorAdd.clearForm();
  addCardPopup.open()
})

buttonEdit.addEventListener('click', () => {
  formValidatorEdit.clearForm();
  const realInfo = userInfo.getUserInfo();
  nameInput.value = realInfo.myname;
  aboutInput.value = realInfo.about;
  editProfilePopup.open()
})
