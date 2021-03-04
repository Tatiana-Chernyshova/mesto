const overlayLook = document.querySelector('.page__overlay_type_look');
const escCode = 'Escape';

function openPopup (popup) {
  document.addEventListener('keydown', (evt) => {handleEsc(evt, popup)});
  popup.classList.add('page__overlay_active');
}

function closePopup (popup) {
  document.removeEventListener('keydown', handleEsc);
  popup.classList.remove('page__overlay_active');
}

function handleEsc (evt, formElement) {
  if (evt.key === escCode) {
    closePopup(formElement);
  }
}

export { overlayLook, openPopup, closePopup };
