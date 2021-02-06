const overlays = document.querySelectorAll('.page__overlay');
const overlayLook = document.querySelector('.page__overlay_type_look');
const overlayAdd = document.querySelector('.page__overlay_type_add');
const overlayEdit = document.querySelector('.page__overlay_type_edit');
const buttonEdit = document.querySelector('.profile__button_edit');
const nameInput = overlayEdit.querySelector('.popup__input_el_name');
const jobInput = overlayEdit.querySelector('.popup__input_el_about');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__about');
const formEdit = document.querySelector('.popup_do_edit');
const formAdd = document.querySelector('.popup_do_add');
const buttonAdd = document.querySelector('.profile__button_add');
const template = document.querySelector('.template');
const contentElements = document.querySelector('.content__elements');
const captionInput = overlayAdd.querySelector('.popup__input_el_caption');
const imageInput = overlayAdd.querySelector('.popup__input_el_image');
const captionPopup = document.querySelector('.popup__caption');
const imagePopup = document.querySelector('.popup__image');
const formElement = document.querySelector('.popup_type_form');

function openPopup (popup) {
  document.addEventListener('keydown', (evt) => {handleEsc(evt, popup)});
  popup.classList.add('page__overlay_active');
}

function openPopupEdit () {
  clearForm(overlayEdit, selectors);
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopup (popup) {
  document.removeEventListener('keydown', handleEsc);
  popup.classList.remove('page__overlay_active');
}

function handleFormSubmitAdd (evt) {
  const myObject = {
    name: captionInput.value,
    link: imageInput.value};
  getCard(myObject);
  captionInput.value = '';
  imageInput.value = '';
  renderCardPrepend(myObject);
  closePopup(overlayAdd);
}

function handleFormSubmitEdit (evt) {
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(overlayEdit);
}

function handleOverlaysItem (overlay) {
  overlay.addEventListener('click', handleOverlay);
}

function handleOverlay (event) {
  if (event.target === event.currentTarget) { 
    closePopup(event.target);
  };
}

function getCard (el) {
  const htmlElement = template.content.cloneNode(true);
  const elementsCaption = htmlElement.querySelector('.elements__caption');
  const elementsImage = htmlElement.querySelector('.elements__image');
  const elementsButtonDelete = htmlElement.querySelector('.elements__button-delete');
  const elementsButtonLike = htmlElement.querySelector('.elements__button-like');
  elementsCaption.innerText = el.name;
  elementsImage.setAttribute('src', el.link);
  elementsImage.setAttribute('alt', el.name);
  elementsButtonDelete.addEventListener('click', handleDelete);
  elementsButtonLike.addEventListener('click', handleLike);
  elementsImage.addEventListener('click', () => handleLook(el));
  return htmlElement;
}

function renderCardAppend (card) {
  contentElements.append(getCard(card));
}

function renderCardPrepend (card) {
  contentElements.prepend(getCard(card));
}

function handleDelete(evt) {
  evt.target.closest('.elements__item').remove();
}

function handleLike(evt) {
  evt.target.classList.toggle('elements__button-like_active');
}

function handleLook(el) {
  imagePopup.setAttribute('src', el.link);
  imagePopup.setAttribute('alt', `Фото ${el.name}`);
  captionPopup.textContent = el.name;
  openPopup(overlayLook);
}

function handleEsc (evt, formElement) {
  if (evt.key === 'Escape') {
    closePopup(formElement);
  }
}

overlays.forEach (popup => {
  popup.querySelector('.popup__button_close').addEventListener('click', () => closePopup(popup));
  handleOverlaysItem(popup);
});

initialCards.forEach(card => {
  renderCardAppend(card);
});

buttonAdd.addEventListener('click', () => clearForm(overlayAdd, selectors));
buttonEdit.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit', handleFormSubmitEdit);
formAdd.addEventListener('submit', handleFormSubmitAdd);
