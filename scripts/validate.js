const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  if (!errorElement.textContent) {
    errorElement.textContent = errorMessage;
  }
  errorElement.classList.add(selectors.inputErrorClassActive);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(selectors.inputErrorClassActive);
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
  });
  formElement.addEventListener('submit', () => {
    toggleButtonActive(inputList, buttonElement, formElement);
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    document.addEventListener('keydown', function handleEsc (evt) {
      if (evt.key === 'Escape') {
        closePopup(formElement.parentElement);
        formElement.removeEventListener('keydown', handleEsc);
      }
    });
    setEventListeners(formElement);
  });
};

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputErrorClassActive: 'popup__input-error_active',
  errorClass: 'popup__error_visible'
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectors.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(selectors.inactiveButtonClass);
  }
};

const toggleButtonActive = (inputList, buttonElement, formElement) => {
  if (!hasInvalidInput(inputList)) {
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    const myObject = {
      name: captionInput.value,
      link: imageInput.value};
    getCard(myObject);
    captionInput.value = '';
    imageInput.value = '';
    renderCardPrepend(myObject);
    closePopup(formElement.parentElement);
  }
};

enableValidation(); 
