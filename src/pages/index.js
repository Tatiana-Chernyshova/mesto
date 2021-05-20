import '../pages/index.css';

import { initialCards, buttonEdit, buttonAdd, contentElements, selectors, nameInput, aboutInput } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formValidatorAdd = new FormValidator(selectors, '.popup_do_add');
const formValidatorEdit = new FormValidator(selectors, '.popup_do_edit');
const editProfilePopup = new PopupWithForm('.page__overlay_type_edit', editProfileSubmitHandler);
const addCardPopup = new PopupWithForm('.page__overlay_type_add', addCardSubmitHandler);
const popupWithImage = new PopupWithImage('.page__overlay_type_look');
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__about' });

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = generateNewCard(item);
    cardList.addItem(cardElement);
  }
}, contentElements);

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();
popupWithImage.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
cardList.renderItems();

function generateNewCard(data) {
  const card = new Card(data, '.template', cardImageClickHandler);
  const cardElement = card.generateCard();
  return cardElement;
}

function cardImageClickHandler(url, text) {
  popupWithImage.open(url, text);
}

function addCardSubmitHandler(data) {
  const cardElement = generateNewCard(data);
  cardList.prependItem(cardElement);
  this.close();
}

function editProfileSubmitHandler(data) {
  userInfo.setUserInfo(data);
  this.close();
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
