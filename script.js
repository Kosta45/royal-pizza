// Selectors
const popupButton = document.querySelector('.popup-button');
const menuCards = document.getElementById('menuCards');

// Adding Event Listener
popupButton.addEventListener('click', closePopup)


// Menu
const menuPizza = [
    { name: 'Mushrooms-Сheese', price: 30, button: "Add" },
    { name: 'Omelette-pizza', price: 50, button: "Add" },
    { name: 'Roman-pizza', price: 30, button: "Add" },
    { name: 'Royal-pizza', price: 60, button: "Add" },
    { name: 'Royal-two-pizza', price: 50, button: "Add" },
    { name: 'Tomato-pizza', price: 60, button: "Add" },
    { name: 'DRAGON', price: 40, button: "Add" },
    { name: 'Easy-pizza', price: 33, button: "Add" },
    { name: 'Marinara', price: 28, button: "Add" }
];


// Functions ================


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


function createChoiceMenuPizza() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML =
        `<div class='block-pizza'>
        <div class='box-pizza'> <img src='/img/pizzies/Mushrooms-Сheese-pizza.png' class='img-pizza'> <span>${menuPizza[0].name}  ${menuPizza[0].price}$</span>  <button>wsw</button></div>
        <div  class='box-pizza'> <img src='/img/pizzies/Omelette-pizza.png' class='img-pizza'>        <span> ${menuPizza[1].name} ${menuPizza[0].price}$</span> <button>wsw</button></div>
        <div  class='box-pizza'> <img src='/img/pizzies/Roman-pizza.png' class='img-pizza'>           <span> ${menuPizza[2].name} ${menuPizza[0].price}$</span> <button>wsw</button></div>
        </div>
        <div class='block-pizza'>
        <div  class='box-pizza'> <img src='/img/pizzies/Royal-pizza.png' class='img-pizza'>           <span> ${menuPizza[3].name} ${menuPizza[0].price}$</span> <button>wsw</button></div>
        <div  class='box-pizza'> <img src='/img/pizzies/Royal-two-pizza.png' class='img-pizza'>       <span> ${menuPizza[4].name} ${menuPizza[0].price}$</span> <button>wsw</button></div>
        <div  class='box-pizza'> <img src='/img/pizzies/Tomato-pizza.png' class='img-pizza'>          <span> ${menuPizza[5].name} ${menuPizza[0].price}$</span> <button>wsw</button></div>
        </div>
        <div class='block-pizza'>
        <div  class='box-pizza'> <img src='/img/pizzies/DRAGON.png' class='img-pizza'>                <span> ${menuPizza[6].name} ${menuPizza[0].price}$</span> <button>wsw</button></div>
        <div  class='box-pizza'> <img src='/img/pizzies/Easy-pizza.png' class='img-pizza'>            <span> ${menuPizza[7].name} ${menuPizza[0].price}$</span> <button>wsw</button></div>
        <div  class='box-pizza'> <img src='/img/pizzies/Marinara.png' class='img-pizza'>              <span>${menuPizza[8].name} ${menuPizza[0].price}$</span>  <button>wsw</button></div>
        </div>
        `;
};

createChoiceMenuPizza();