// Selectors
const popupButton = document.querySelector('.popup-button');
const btnPizzaChoice = document.querySelector('.pizza')
const btnBurgerChoice = document.querySelector('.burger')
const btnSnackChoice = document.querySelector('.snack')
const btnDrinkChoice = document.querySelector('.drink')

// Adding Event Listener
popupButton.addEventListener('click', closePopup);
btnPizzaChoice.addEventListener('click', createChoiceMenuPizza);
btnBurgerChoice.addEventListener('click', createChoiceMenuBurger);
btnSnackChoice.addEventListener('click', createChoiceMenuSnack)
btnDrinkChoice.addEventListener('click', createChoiceMenuDrink)


// Menu. Array for choice menu. Can changing price and name -----------------------------------------------------------------------------------
const menuPizza = [
    { name: 'Mushrooms-Сheese', price: 30 },
    { name: 'Omelette-pizza', price: 50 },
    { name: 'Roman-pizza', price: 30 },
    { name: 'Royal-pizza', price: 60 },
    { name: 'Royal-two-pizza', price: 50 },
    { name: 'Tomato-pizza', price: 60 },
    { name: 'DRAGON', price: 40 },
    { name: 'Easy-pizza', price: 33 },
    { name: 'Marinara', price: 28 }
];
const menuBurger = [
    { name: 'Burger', price: 30 },
    { name: 'Double-cheeseburger', price: 50 },
    { name: 'Eggs-burger', price: 30 },
    { name: 'Gamburger', price: 60 },
    { name: 'Golden-burger', price: 50 },
    { name: 'BigBurger', price: 60 },
    { name: 'Cheeseburger', price: 40 },
    { name: 'BlackBurger', price: 33 },
    { name: 'Sausage-burger', price: 28 }
];
const menuSnack = [
    { name: 'Mushrooms-Сheese', price: 30 },
    { name: 'Omelette-pizza', price: 50 },
    { name: 'Roman-pizza', price: 30 },
    { name: 'Royal-pizza', price: 60 },
    { name: 'Royal-two-pizza', price: 50 },
    { name: 'Tomato-pizza', price: 60 }
];
const menuDrink = [
    { name: 'Mushrooms-Сheese', price: 30 },
    { name: 'Omelette-pizza', price: 50 },
    { name: 'Roman-pizza', price: 30 },
    { name: 'Royal-pizza', price: 60 },
    { name: 'Royal-two-pizza', price: 50 },
    { name: 'Tomato-pizza', price: 60 }
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

// Function on choice menu. Create Burger, Snacks and Drinks lists. Code belowe

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

function createChoiceMenuBurger() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML =
        `<div class='block-burger'>
        <div class='box-burger'>  <img src='/img/burgers/Burger1.png' class='img-burger'>  <span>${menuBurger[0].name}  ${menuBurger[0].price}$</span>  <button>wsw</button></div>
        <div  class='box-burger'> <img src='/img/burgers/Burger2.png' class='img-burger'>  <span> ${menuBurger[1].name} ${menuBurger[0].price}$</span> <button>wsw</button></div>
        <div  class='box-burger'> <img src='/img/burgers/Burger3.png' class='img-burger'>  <span> ${menuBurger[2].name} ${menuBurger[0].price}$</span> <button>wsw</button></div>
        </div>
        <div class='block-burger'>
        <div  class='box-burger'> <img src='/img/burgers/Burger4.png' class='img-burger'>  <span> ${menuBurger[3].name} ${menuBurger[0].price}$</span> <button>wsw</button></div>
        <div  class='box-burger'> <img src='/img/burgers/Burger5.png' class='img-burger'>  <span> ${menuBurger[4].name} ${menuBurger[0].price}$</span> <button>wsw</button></div>
        <div  class='box-burger'> <img src='/img/burgers/Burger6.png' class='img-burger'>  <span> ${menuBurger[5].name} ${menuBurger[0].price}$</span> <button>wsw</button></div>
        </div>
        <div class='block-burger'>
        <div  class='box-burger'> <img src='/img/burgers/Burger7.png' class='img-burger'>  <span> ${menuBurger[6].name} ${menuBurger[0].price}$</span> <button>wsw</button></div>
        <div  class='box-burger'> <img src='/img/burgers/Burger8.png' class='img-burger'>  <span> ${menuBurger[7].name} ${menuBurger[0].price}$</span> <button>wsw</button></div>
        <div  class='box-burger'> <img src='/img/burgers/Burger9.png' class='img-burger'>  <span>${menuBurger[8].name} ${menuBurger[0].price}$</span>  <button>wsw</button></div>
        </div>
        `;
};
function createChoiceMenuSnack() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML =
        `<div class='block-snack'>
        <div class='box-snack'>  <img src='/img/snacks/snack1.png' class='img-snack'>  <span>${menuSnack[0].name}  ${menuSnack[0].price}$</span>  <button>wsw</button></div>
        <div  class='box-snack'> <img src='/img/snacks/snack2.png' class='img-snack'>  <span> ${menuSnack[1].name} ${menuSnack[0].price}$</span> <button>wsw</button></div>
        <div  class='box-snack'> <img src='/img/snacks/snack3.png' class='img-snack'>  <span> ${menuSnack[2].name} ${menuSnack[0].price}$</span> <button>wsw</button></div>
        </div>
        <div class='block-snack'>
        <div  class='box-snack'> <img src='/img/snacks/snack4.png' class='img-snack'>  <span> ${menuSnack[3].name} ${menuSnack[0].price}$</span> <button>wsw</button></div>
        <div  class='box-snack'> <img src='/img/snacks/snack5.png' class='img-snack'>  <span> ${menuSnack[4].name} ${menuSnack[0].price}$</span> <button>wsw</button></div>
        <div  class='box-snack'> <img src='/img/snacks/snack6.png' class='img-snack'>  <span> ${menuSnack[5].name} ${menuSnack[0].price}$</span> <button>wsw</button></div>
        </div>
        `;
};
function createChoiceMenuDrink() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML =
        `<div class='block-drink'>
        <div  class='box-drink'> <img src='/img/drinks/drink1.png' class='img-drink'> <span> ${menuDrink[0].name}  ${menuDrink[0].price}$</span> <button>wsw</button></div>
        <div  class='box-drink'> <img src='/img/drinks/drink2.png' class='img-drink'> <span> ${menuDrink[1].name} ${menuDrink[0].price}$</span>  <button>wsw</button></div>
        <div  class='box-drink'> <img src='/img/drinks/drink3.png' class='img-drink'> <span> ${menuDrink[2].name} ${menuDrink[0].price}$</span> <button>wsw</button></div>
        </div>
        <div class='block-drink'>
        <div  class='box-drink'> <img src='/img/drinks/drink4.png' class='img-drink'>  <span> ${menuDrink[3].name} ${menuDrink[0].price}$</span> <button>wsw</button></div>
        <div  class='box-drink'> <img src='/img/drinks/drink5.png' class='img-drink'>  <span> ${menuDrink[4].name} ${menuDrink[0].price}$</span> <button>wsw</button></div>
        <div  class='box-drink'> <img src='/img/drinks/drink6.png' class='img-drink'>  <span> ${menuDrink[5].name} ${menuDrink[0].price}$</span> <button>wsw</button></div>
        </div>
        `;
};


// Вызываю функцию для первоночального появления выбора меню "Пиццы"
createChoiceMenuPizza();

