// import '../pages/index.css';

import { initialCards, buttonEdit, buttonAdd, contentElements, selectors, nameInput, aboutInput } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/API.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

// const formValidatorAdd = new FormValidator(selectors, '.popup_do_add');
const formValidatorEdit = new FormValidator(selectors, '.popup_do_edit');
const editProfilePopup = new PopupWithForm('.page__overlay_type_edit', editProfileSubmitHandler);
const addCardPopup = new PopupWithForm('.page__overlay_type_add', addCardSubmitHandler);
const popupWithImage = new PopupWithImage('.page__overlay_type_look');
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__about', userID: 'userID' });
// const deleteCardPopup = new PopupWithSubmit('.page__overlay_type_delete');

// const cardList = new Section({
//   // data: initialCards,
//   data: {},
//   renderer: (item) => {
//     const cardElement = generateNewCard(item);
//     cardList.addItem(cardElement);
//   }
// }, contentElements);

let user = null;


const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-24',
    token: '36ca9ef1-bd1d-492c-84aa-4de20805470a'
}); 





// formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();
popupWithImage.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
// deleteCardPopup.setEventListeners();
// cardList.renderItems();



function cardImageClickHandler(url, text) {
  popupWithImage.open(url, text);
}



// api.addCard();



// function deleteCardSubmitHandler(data) {
//   api.addCard(data);
//   // api.deleteCard(data);
//   // const cardElement = generateNewCard(data);
//   // cardList.prependItem(cardElement);
//   this.close();
// }

function editProfileSubmitHandler(data) {
  userInfo.setUserInfo(data);
  api.setUserData(data);
  this.close();
}

// buttonDelete.addEventListener('click', () => {
//   // formValidatorAdd.clearForm();
//   deleteCardPopup.open()
// })

buttonAdd.addEventListener('click', () => {
  // formValidatorAdd.clearForm();
  addCardPopup.open()
})

buttonEdit.addEventListener('click', () => {
  // formValidatorEdit.clearForm();
  const realInfo = userInfo.getUserInfo();
  nameInput.value = realInfo.name;
  aboutInput.value = realInfo.about;
  editProfilePopup.open()
})



const cardList = new Section({
  // data: initialCards,
  // data: {},
  renderer: (item) => {
    const cardElement = generateNewCard(item);
    // console.log(cardElement);
    cardList.addItem(cardElement);
  }
}, contentElements);

function generateNewCard(data) {
  // const card = new Card(data.name, data.link, '.template', cardImageClickHandler, data.likes.length );
  const card = new Card(data, '.template', cardImageClickHandler, handleDeleteClick, deleteCard);

  const cardElement = card.generateCard();
  // card.show();
  return cardElement;
}

function addCardSubmitHandler(data) {
  console.log(data.name);
  console.log(data.link);

  api.addCard(data)
  .then(res => {
    const cardElement = generateNewCard(res);
    cardList.prependItem(cardElement)
  })
  .catch(err => { console.log(`Ошибка при отправке карточки: ${err}`) })
  // api.addCard(data);

  // // generateNewCard(data);
  // const card = new Card(data, '.template', cardImageClickHandler, handleDeleteClick, deleteCard);
  // const cardElement = card.generateCard();

    // console.log(cardElement);
    // return cardElement;
  
  // const cardElement = generateNewCard(data);
  // cardList.prependItem(cardElement);

  
  this.close();
}

const deleteCardDPopup = new Popup('.page__overlay_type_delete');
deleteCardDPopup.setEventListeners();

const handleDeleteClick = () => {
  deleteCardDPopup.open();
}

  const deleteCard = (formDelete, deleteCard, cardId) => {
    api.deleteCards(cardId).then(res => {
      formDelete.addEventListener('submit', (event) => {
        event.preventDefault();
        deleteCard();
        deleteCardDPopup.close();
        console.log(res);
      })
    }).catch(e => { console.log(`Ошибка при удалении: ${e}`) })
  }


Promise.all([api.getUserData(), api.getCards()])
  .then(([userData, card]) => {
    // console.log(userData);
    // console.log(card);
    // user = userData.data;
    // cardList.renderItems();
    user = userData;
    userInfo.setUserInfo(user);
    // console.log(user);
    console.log(card);
    cardList.renderItems(card);
    
  })



// const api = new Api({
//   address: 'https://mesto.nomoreparties.co/v1/cohort-24',
//   token: '36ca9ef1-bd1d-492c-84aa-4de20805470a'
// }); 

  // fetch('https://nomoreparties.co/v1/cohort-24/cards', {
  //   method: 'POST',
  //   headers: {
  //     authorization: '36ca9ef1-bd1d-492c-84aa-4de20805470a',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     // name: 'Marie Skłodowska Curie',
  //     // about: 'Physicist and Chemist'
  //     name: 'Khit',
  //     link: 'https://im0-tub-ru.yandex.net/i?id=e18c0ad79e706f65b7b28966296f34c7&n=13'
  //   })
  // }); 
  


    //  fetch(`https://nomoreparties.co/v1/cohort-24/cards/60ae3dfa5a5d3b0036d41442`, {
    //   method: 'DELETE',
    //   headers: {
    //     authorization: '36ca9ef1-bd1d-492c-84aa-4de20805470a',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res => {
    //     return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    //   })
  

  // let user = null;
