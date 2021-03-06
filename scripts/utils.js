const overlayLook = document.querySelector('.page__overlay_type_look');
const escCode = 'Escape';
const imagePopup = document.querySelector('.popup__image');
const captionPopup = document.querySelector('.popup__caption');

function openPopup (popup) {
  document.addEventListener('keydown', handleEsc);
  popup.classList.add('page__overlay_active');
}

function closePopup (popup) {
  document.removeEventListener('keydown', handleEsc);
  popup.classList.remove('page__overlay_active');
}

function handleEsc (evt) {
  if (evt.key === escCode) {
    const openedPopup  = document.querySelector('.page__overlay_active');
    closePopup(openedPopup);
  }
}

export { overlayLook, openPopup, closePopup, imagePopup, captionPopup };
