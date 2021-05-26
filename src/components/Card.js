class Card {
  // constructor (name, link, templateSelector, handleCardClick) {
  //   this._name = name;
  //   this._link = link;
  //   // this._likes = likes;
  //   this._templateSelector = templateSelector;
  //   this._handleCardClick = handleCardClick;
  // }
  
  constructor ({ name, link, likes, owner, _id }, templateSelector, handleCardClick, handleDeleteClick, deleteCard) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._owner = owner;
    this._id = _id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._deleteCard = deleteCard;
  }
  // constructor({ name, link, likes, owner, _id },
  //   cardsTemplate,
  //   handleCardClick,
  //   deletedPopup,
  //   deleteCard,
  //   removeIcon,
  //   userData,
  //   putLike,
  //   deleteLike,
  //   loadLike
  // ) {
  //   this._nameImage = name;
  //   this._urlImage = link;
  //   this._likes = likes;
  //   this._id = owner._id;
  //   this._userId = userData._id
  //   this._idCard = _id;


  //   this._cardsTemplate = cardsTemplate;
  //   this._handleCardClick = handleCardClick;

  //   this._handleDeleteIconClick = deletedPopup;
  //   this._deleteCard = deleteCard;
  //   this._removeIcon = removeIcon;
  //   this._putLike = putLike;
  //   this._deleteLike = deleteLike;
  //   this._loadLike = loadLike;
  // }


  // constructor ({name, link}, templateSelector, handleCardClick) {
  //   this._name = name;
  //   this._link = link;
  //   this._templateSelector = templateSelector;
  //   this._handleCardClick = handleCardClick;
  // }
  // constructor ({ data }, templateSelector, handleCardClick) {
  //   this._name = data.name;
  //   this._link = data.link;
  //   this._templateSelector = templateSelector;
  //   this._handleCardClick = handleCardClick;
  // }

  // show() {
  //   console.log(this._name);
  //   console.log(this._link);
  // }
  _getTemplate() {
      const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
      return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    // this._setEventListeners();
    const _elementsCaption = this._element.querySelector('.elements__caption');
    const _elementsImage = this._element.querySelector('.elements__image');
    this._likeContainer = this._element.querySelector('.elements__number');
    this._buttonDelete = this._element.querySelector('.elements__button-delete');

    _elementsCaption.innerText = this._name;
    _elementsImage.setAttribute('src', this._link);
    _elementsImage.setAttribute('alt', this._name);
    this._likeContainer.innerText = this._likes.length;
    this._setEventListenersDelete();
    
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.elements__button-delete').addEventListener('click', () => {
      this._handleDelete();
    });
    this._element.querySelector('.elements__button-like').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
}
  _handleLike(evt) {
    this._element.querySelector('.elements__button-like').classList.toggle('elements__button-like_active')
  }
  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _setEventListenersDelete() {
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick();
      this._deleteCardDPopup = document.querySelector('.page__overlay_active');
      this._cardRemoveButton = this._deleteCardDPopup.querySelector('.popup__submit');
      this._deleteCard(this._cardRemoveButton, this._handleDelete, this._id);

    })
  }
}

export { Card };