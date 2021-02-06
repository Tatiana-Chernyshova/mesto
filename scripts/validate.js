const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  if (!errorElement.textContent) {
    errorElement.textContent = errorMessage;
  }
  errorElement.classList.add(obj.inputErrorClassActive);
};

const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.inputErrorClassActive);
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, formElement, obj);
    });
  });
};

function enableValidation (obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', handleFormSubmit);
    document.addEventListener('keydown', function handleEsc (evt) {
      if (evt.key === 'Escape') {
        closePopup(formElement.parentElement);
        formElement.removeEventListener('keydown', handleEsc);
      }
    });
    setEventListeners(formElement, obj);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, formElement, obj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
    formElement.removeEventListener('submit', handleFormSubmit);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    formElement.addEventListener('submit', handleFormSubmit);
  };
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('popup_do_edit')) {
    handleFormSubmitEdit(evt);
  } else {
    handleFormSubmitAdd(evt);
  };
};

enableValidation({
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    inputErrorClassActive: 'popup__input-error_active',
  }); 
