const overlays = document.querySelectorAll('.page__overlay');
const overlayLook = document.querySelector('.page__overlay_type_look');
const overlayAdd = document.querySelector('.page__overlay_type_add');
const overlayEdit = document.querySelector('.page__overlay_type_edit');
const editButton = document.querySelector('.profile__button_edit');
const nameInput = overlayEdit.querySelector('.popup__item_el_name');
const jobInput = overlayEdit.querySelector('.popup__item_el_about');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__about');
const formEdit = document.querySelector('.popup_do_edit');
const formAdd = document.querySelector('.popup_do_add');
const addButton = document.querySelector('.profile__button_add');
const template = document.querySelector('.template');
const contentElements = document.querySelector('.content__elements');
const captionInput = overlayAdd.querySelector('.popup__item_el_caption');
const imageInput = overlayAdd.querySelector('.popup__item_el_image');
const caption = document.querySelector('.elements__caption');
const image = document.querySelector('.elements__image');
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

function openPopupEdit() {
  overlayEdit.classList.add('page__overlay_active');
  nameInput.setAttribute('value', name.textContent);
  jobInput.setAttribute('value', job.textContent);
  overlayEdit.querySelector('.popup__button_close').addEventListener('click', closePopup);
};

function openPopupAdd() {
  overlayAdd.classList.add('page__overlay_active');
  overlayAdd.querySelector('.popup__button_close').addEventListener('click', closePopup);
};

function closePopup(evt) {
  overlayEdit.classList.remove('page__overlay_active');
  overlayAdd.classList.remove('page__overlay_active');
  overlayLook.classList.remove('page__overlay_active');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
};

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const myObject = {
    name: captionInput.value,
    link: imageInput.value}
  initialCards.push(myObject);
  console.log(initialCards);
  renderItem(myObject);
  captionInput.value = '';
  imageInput.value = '';
  closePopup();
};

function overlaysItem(overlay) {
  overlay.addEventListener('click', handleOverlay);
};

function handleOverlay(event) {
  if (event.target === event.currentTarget) { 
    closePopup();
  };
};

function render() {
  initialCards.forEach(renderItem);
};

function renderItem(el) {
  const htmlElement = template.content.cloneNode(true);
  htmlElement.querySelector('.elements__caption').innerText = el.name;
  htmlElement.querySelector('.elements__image').setAttribute('src', el.link);
  htmlElement.querySelector('.elements__button-delete').addEventListener('click', handleDelete);
  htmlElement.querySelector('.elements__button-like').addEventListener('click', handleLike);
  htmlElement.querySelector('.elements__image').addEventListener('click', handleLook);
  contentElements.prepend(htmlElement);
};

function handleDelete(evt) {
  evt.target.closest('.elements__item').remove();
};

function handleLike(evt) {
  evt.target.classList.toggle('elements__button-like_active');
};

function handleLook(evt) {
  const elementsCaption = evt.target.closest('.elements__item').querySelector('.elements__caption').textContent;
  overlayLook.classList.add('page__overlay_active');
  overlayLook.querySelector('.popup__image').setAttribute('src', evt.target.getAttribute('src'));
  overlayLook.querySelector('.popup__image').setAttribute('alt', `Фото ${elementsCaption}`);
  overlayLook.querySelector('.popup__caption').textContent = elementsCaption;
  overlayLook.querySelector('.popup__button_close').addEventListener('click', closePopup);
};

render();

overlays.forEach(overlaysItem);
editButton.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit', handleFormSubmit);
addButton.addEventListener('click', openPopupAdd);
formAdd.addEventListener('submit', handleFormSubmitAdd);
// overlayEdit.addEventListener('click', handleOverlay);
// overlayAdd.addEventListener('click', handleOverlay);
// overlayLook.addEventListener('click', handleOverlay);
