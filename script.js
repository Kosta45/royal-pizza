// Selectors
const popupButton = document.querySelector('.popup-button');
const menuCards = document.getElementById('menuCards');

// Adding Event Listener
popupButton.addEventListener('click', closePopup)


// Menu

// const menuPizza = [
//     { name: 'Carbonara', price: 30, button: "Add" },
//     { name: 'Vegetable', price: 50, button: "Add" },
//     { name: 'Royal', price: 30, button: "Add" },
//     { name: 'Dragon', price: 60, button: "Add" },
//     { name: 'Meat', price: 50, button: "Add" },
//     { name: 'New', price: 60, button: "Add" },
//     { name: 'Gribnaia', price: 40, button: "Add" },
//     { name: 'Carbon', price: 33, button: "Add" },
//     { name: 'Turtle', price: 28, button: "Add" }
// ];










// Functions ================

// function createMenuCard() {
// }

// Open field to type name and surname
const openPopup = setTimeout(() => {
    const popupActive = document.querySelector('.popup');
    popupActive.classList.add('open');
}, 1000);


// CLose window with fields for type name and surname
function closePopup() {
    const popupActiveTwo = document.querySelector('.popup.open');
    popupActiveTwo.classList.add('close')
};

