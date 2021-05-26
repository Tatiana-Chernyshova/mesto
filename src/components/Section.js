export default class Section {
  constructor({ renderer }, containerSelector) {
    // this._renderedItems = data;
    this._renderer = renderer;
    
    this._container = document.querySelector(containerSelector);
    this._likeContainer = this._container.querySelector('.elements__number');
  }

  // renderItems() {
  //   this._renderedItems.forEach(item => this._renderer(item))
  // }

  renderItems(items) {
    items.forEach(item => {
        this._renderer(item);
        // console.log(item.likes.length);
        // this._likes;
        // console.log(this._likeContainer);
        // item.likes.length
    });
}

  addItem(element) {
    this._container.append(element);
    // console.log(this._likeContainer);
  }

  prependItem(element) {
    this._container.prepend(element);
    
  }
}

// const cardList = new Section({
//   // data: initialCards,
//   data: arr,
//   renderer: (item) => {
//     const cardElement = generateNewCard(item);
//     cardList.addItem(cardElement);
//   }
// }, contentElements);

// class Card {
//   constructor ({name, link}, templateSelector, handleCardClick) {
//     this._name = name;
//     this._link = link;
//     this._templateSelector = templateSelector;
//     this._handleCardClick = handleCardClick;
//   }
//   _getTemplate() {
//       const cardElement = document
//       .querySelector(this._templateSelector)
//       .content
//       .querySelector('.elements__item')
//       .cloneNode(true);
//       return cardElement;
//   }
//   generateCard() {
//     this._element = this._getTemplate();
//     this._setEventListeners();
//     const _elementsCaption = this._element.querySelector('.elements__caption');
//     const _elementsImage = this._element.querySelector('.elements__image');
//     _elementsCaption.innerText = this._name;
//     _elementsImage.setAttribute('src', this._link);
//     _elementsImage.setAttribute('alt', this._name);
//     return this._element;
//   }