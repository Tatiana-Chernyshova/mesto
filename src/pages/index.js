import '../pages/index.css';

import { buttonEdit, buttonAdd, contentElements, selectors, nameInput, aboutInput, avatarInput, buttonEditAvatar } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/API.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

const formValidatorAdd = new FormValidator(selectors, '.popup_do_add');
const formValidatorEdit = new FormValidator(selectors, '.popup_do_edit');
const formValidatorAvatar = new FormValidator(selectors, '.popup_do_avatar');
const editProfilePopup = new PopupWithForm('.page__overlay_type_edit', editProfileSubmitHandler);
const addCardPopup = new PopupWithForm('.page__overlay_type_add', addCardSubmitHandler);
const editAvatarPopup = new PopupWithForm('.page__overlay_type_avatar', editAvatarSubmitHandler);
const popupWithImage = new PopupWithImage('.page__overlay_type_look');
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__about', profileAvatar: '.profile__avatar' });
const deleteCardDPopup = new PopupWithSubmit('.page__overlay_type_delete', confirmCardDeletion);

const cardList = new Section({
  renderer: (item) => {
    const cardElement = generateNewCard(item);
    cardList.addItem(cardElement);
  }
}, contentElements);

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-24',
  token: '36ca9ef1-bd1d-492c-84aa-4de20805470a'
}); 

let user = null;

function editAvatarSubmitHandler (data) {
  editAvatarPopup.renderLoading(true);
  api.editUserAvatar(data.link)
    .then((res) => {
      userInfo.setUserInfo(res);
      editAvatarPopup.close();
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      editAvatarPopup.renderLoading(false)
    })
}

function cardImageClickHandler(url, text) {
  popupWithImage.open(url, text);
}

function editProfileSubmitHandler(data) {
  editProfilePopup.renderLoading(true);
  api.setUserData(data)
  .then(res => {
    userInfo.setUserInfo(res);
    editProfilePopup.close();
  })
    .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally(() => {
    editProfilePopup.renderLoading(false)
  })
  
}

function generateNewCard(data) {
  const card = new Card(data, user._id, '.template', cardImageClickHandler, handleDeleteIconClick,
  {handleLikeClick: () => {
    const likedCard = card.likedCard();
    const resultApi = likedCard ? api.deleteLike(card.getIdCard()) : api.putLike(card.getIdCard());
    resultApi.then(data => {
      card.setLikes(data.likes);
      card.renderLikes();
    })
    .catch((e) => {
      console.log(e);
    })
  }});
  const cardElement = card.generateCard();
  return cardElement;
}

function addCardSubmitHandler(data) {
  addCardPopup.renderLoading(true);
  api.addCard(data)
    .then(res => {
      const cardElement = generateNewCard(res);
      cardList.prependItem(cardElement);
      addCardPopup.close();
    })
    .catch(e => { console.log(e) })
    .finally(() => {
      addCardPopup.renderLoading(false);
    })
    
}

function handleDeleteIconClick(cardId, cardElement) {
  deleteCardDPopup.open(cardId, cardElement);
}

  function confirmCardDeletion(cardId, cardElement) {
    api.deleteCard(cardId)
      .then(() => {
        cardElement.remove();
        deleteCardDPopup.close();
      })
      .catch(e => console.log(e))
  }

Promise.all([api.getUserData(), api.getCards()])
  .then(([userData, card]) => {
    user = userData;
    userInfo.setUserInfo(user);
    cardList.renderItems(card);
  })
  .catch(e => { console.log(e) })

  formValidatorAdd.enableValidation();
  formValidatorEdit.enableValidation();
  formValidatorAvatar.enableValidation();
  popupWithImage.setEventListeners();
  editProfilePopup.setEventListeners();
  addCardPopup.setEventListeners();
  editAvatarPopup.setEventListeners();
  deleteCardDPopup.setEventListeners();

  buttonAdd.addEventListener('click', () => {
    formValidatorAdd.clearForm();
    addCardPopup.open()
  })
  
  buttonEdit.addEventListener('click', () => {
    formValidatorEdit.clearForm();
    const realInfo = userInfo.getUserInfo();
    nameInput.value = realInfo.name;
    aboutInput.value = realInfo.about;
    editProfilePopup.open()
  })
  
  buttonEditAvatar.addEventListener('click', () => {
    formValidatorAvatar.clearForm();
    editAvatarPopup.open()
  })
  
