let editButton = document.querySelector('.profile__button_edit');
let overlay = document.querySelector('.page__overlay');
let closeButton = overlay.querySelector('.popup__button_close');

let togglePopup = () => {
  overlay.classList.toggle('page__overlay_active');
};

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});

let form = overlay.querySelector('.popup__container');

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  let nameInput = overlay.querySelector('.popup__item_el_name');
  let jobInput = overlay.querySelector('.popup__item_el_about');

  // Получите значение полей из свойства value
  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  // Выберите элементы, куда должны быть вставлены значения полей
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__about');

  // Вставьте новые значения с помощью textContent
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  togglePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', handleFormSubmit); 

let likeButton = document.querySelector('.elements__button-like');

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('elements__button-like_active');
});

