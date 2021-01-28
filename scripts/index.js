const overlays = document.querySelectorAll('.page__overlay');
const overlayLook = document.querySelector('.page__overlay_type_look');
const overlayAdd = document.querySelector('.page__overlay_type_add');
const overlayEdit = document.querySelector('.page__overlay_type_edit');
const buttonEdit = document.querySelector('.profile__button_edit');
const nameInput = overlayEdit.querySelector('.popup__item_el_name');
const jobInput = overlayEdit.querySelector('.popup__item_el_about');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__about');
const formEdit = document.querySelector('.popup_do_edit');
const formAdd = document.querySelector('.popup_do_add');
const buttonAdd = document.querySelector('.profile__button_add');
const template = document.querySelector('.template');
const contentElements = document.querySelector('.content__elements');
const captionInput = overlayAdd.querySelector('.popup__item_el_caption');
const imageInput = overlayAdd.querySelector('.popup__item_el_image');
const captionPopup = document.querySelector('.popup__caption');
const imagePopup = document.querySelector('.popup__image');

function openPopup (evt) {
  evt.classList.add('page__overlay_active');
};

function handleOpenPopupEdit () {
  openPopup(overlayEdit);
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
};

function handleOpenPopupAdd () {
  openPopup(overlayAdd);
};

function handleCloses (evt) {
  evt.target.closest('.page__overlay').classList.remove('page__overlay_active');
};

function handleFormSubmitEdit (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  handleCloses(evt);
};

function handleFormSubmitAdd (evt) {
  evt.preventDefault();
  const myObject = {
    name: captionInput.value,
    link: imageInput.value};
  getCard(myObject);
  captionInput.value = '';
  imageInput.value = '';
  renderCardPrepend(myObject);
  handleCloses(evt);
};

function handleOverlaysItem (overlay) {
  overlay.addEventListener('click', handleOverlay);
};

function handleOverlay (event) {
  if (event.target === event.currentTarget) { 
    handleCloses(event);
  };
};

function getCard (el) {
  const htmlElement = template.content.cloneNode(true);
  htmlElement.querySelector('.elements__caption').innerText = el.name;
  htmlElement.querySelector('.elements__image').setAttribute('src', el.link);
  htmlElement.querySelector('.elements__image').setAttribute('alt', el.name);
  htmlElement.querySelector('.elements__button-delete').addEventListener('click', handleDelete);
  htmlElement.querySelector('.elements__button-like').addEventListener('click', handleLike);
  htmlElement.querySelector('.elements__image').addEventListener('click', function () {
    handleLook(el);
  });
  return htmlElement;
};

function renderCardAppend (card) {
  contentElements.append(getCard(card));
};

function renderCardPrepend (card) {
  contentElements.prepend(getCard(card));
};

function handleDelete(evt) {
  evt.target.closest('.elements__item').remove();
};

function handleLike(evt) {
  evt.target.classList.toggle('elements__button-like_active');
};

function handleLook(el) {
  imagePopup.setAttribute('src', el.link);
  imagePopup.setAttribute('alt', `Фото ${el.name}`);
  captionPopup.textContent = el.name;
  overlayLook.querySelector('.popup__button').addEventListener('click', handleCloses);
  openPopup(overlayLook);
};

overlays.forEach (evt => {
  evt.querySelector('.popup__button').addEventListener('click', handleCloses);
  handleOverlaysItem(evt);
});

initialCards.forEach(card => {
  getCard(card);
  renderCardAppend(card);
});

buttonAdd.addEventListener('click', handleOpenPopupAdd);
buttonEdit.addEventListener('click', handleOpenPopupEdit);
formEdit.addEventListener('submit', handleFormSubmitEdit);
formAdd.addEventListener('submit', handleFormSubmitAdd);
