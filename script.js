const popupButton = document.querySelector('.popup-button');

// Adding event listener
popupButton.addEventListener('click', closePopup)









// Functions ================

// Open field to type name and surname
const openPopup = setTimeout((e) => {
    const popupActive = document.querySelector('.popup');
    popupActive.classList.add('open');
}, 2000);


// CLose window with fields for type name and surname
function closePopup(event) {
    // event.preventDefault()
    const popupActiveTwo = document.querySelector('.popup.open');
    popupActiveTwo.classList.add('close')
};




