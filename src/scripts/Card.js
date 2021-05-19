class Card {
  constructor ({name, link}, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getInfo() {
    return {
      name: this._name,
      Link: this._link,
    }
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
    this._setEventListeners();
    const _elementsCaption = this._element.querySelector('.elements__caption');
    const _elementsImage = this._element.querySelector('.elements__image');
    _elementsCaption.innerText = this._name;
    _elementsImage.setAttribute('src', this._link);
    _elementsImage.setAttribute('alt', this._name);
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
}

export { Card };