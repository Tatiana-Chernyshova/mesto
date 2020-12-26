let editButton = document.querySelector('.profile__button_edit'); 
let overlay = document.querySelector('.page__overlay'); 
let closeButton = overlay.querySelector('.popup__button_close'); 
let nameInput = overlay.querySelector('.popup__item_el_name'); 
let jobInput = overlay.querySelector('.popup__item_el_about'); 
let name = document.querySelector('.profile__name'); 
let job = document.querySelector('.profile__about'); 
let form = overlay.querySelector('.popup'); 
let likeButtons = document.querySelectorAll('.elements__button-like');

let openPopup = () => { 
  overlay.classList.add('page__overlay_active'); 
  nameInput.setAttribute('value',name.textContent);  
  jobInput.setAttribute('value',job.textContent); 
}; 

let closePopup = () => { 
  overlay.classList.remove('page__overlay_active'); 
}; 

function handleFormSubmit (evt) { 
  evt.preventDefault();  
  name.textContent = nameInput.value; 
  job.textContent = jobInput.value; 
  closePopup(); 
} 

overlay.addEventListener('click', (event) => { 
  if (event.target === event.currentTarget) { 
    closePopup(); 
  } 
}); 

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('elements__button-like_active');
  });
});

editButton.addEventListener('click', openPopup); 
closeButton.addEventListener('click', closePopup); 
form.addEventListener('submit', handleFormSubmit);
