class Card {
  constructor (data, currentUser, templateSelector, handleCardClick, handleDeleteIconClick, { handleLikeClick }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._id = data._id;
    this._currentUser = currentUser;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick =  handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
  }

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
    const _elementsCaption = this._element.querySelector('.elements__caption');
    this._elementsImage = this._element.querySelector('.elements__image');
    this._likeResult = this._element.querySelector('.elements__number');
    this._buttonDelete = this._element.querySelector('.elements__button-delete');
    this._buttonLike = this._element.querySelector('.elements__button-like');
    
    _elementsCaption.innerText = this._name;
    this._elementsImage.setAttribute('src', this._link);
    this._elementsImage.setAttribute('alt', this._name);
    this._likeResult.innerText = this._likes.length;
    if (this._owner._id === this._currentUser) {
      this._buttonDelete.classList.remove('elements__button-delete_hidden')
    }
    this.renderLikes();
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteIconClick(this._id, this._element);
      });
    
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._elementsImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
}

  getIdCard() {
    return this._id;
  }

  likedCard() {
    return this._likes.some(like => {
      return like._id === this._currentUser
    })
  }

  setLikes(item) {
    this._likes = item;
    this.renderLikes();
  }

  renderLikes() {
    this._likeResult.textContent = this._likes.length;
    this._showLikes(this._id);
  }

  _showLikes() {
    if (this.likedCard(this._id)) {
      this._buttonLike.classList.add('elements__button-like_active');
    } else {
      this._buttonLike.classList.remove('elements__button-like_active');
    }
  }
}

export { Card };