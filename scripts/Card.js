import { openPopup, overlayLook } from './index.js';

class Card {
  constructor (data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getInfo() {
    return {
      name: this._name,
      Link: this._link,
      selector: this._cardSelector,
    }
  }
  _getTemplate() {
      const cardElement = document
      .querySelector('.template')
      .content
      .querySelector(this._cardSelector)
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
      this._handleLook();
    });
  }
  _handleLike(evt) {
    this._element.querySelector('.elements__button-like').classList.toggle('elements__button-like_active')
  }
  _handleDelete() {
    this._element.closest('.elements__item').remove();
  }
  _handleLook() {
    const _imagePopup = document.querySelector('.popup__image');
    const _captionPopup = document.querySelector('.popup__caption');
    _imagePopup.setAttribute('src', this._link);
    _imagePopup.setAttribute('alt', `Фото ${this._name}`);
    _captionPopup.textContent = this._name;
    openPopup(overlayLook);
  }
}

export { Card };