// Selectors
const popupButton = document.querySelector('.popup-button');
const btnPizzaChoice = document.querySelector('.pizza');
const btnBurgerChoice = document.querySelector('.burger');
const btnSnackChoice = document.querySelector('.snack');
const btnDrinkChoice = document.querySelector('.drink');
const personName = document.querySelector('.popup-name');
const personSurame = document.querySelector('.popup-surname');
const displayName = document.querySelector('.display-name');
const displaySurname = document.querySelector('.display-surname');
const logName = document.querySelector('.log-name');
const logSurname = document.querySelector('.log-surname');
const logOutButton = document.querySelector('.log-out-nav')

// Adding Event Listener
popupButton.addEventListener('click', closePopup);
btnPizzaChoice.addEventListener('click', createChoiceMenuPizza);
btnBurgerChoice.addEventListener('click', createChoiceMenuBurger);
btnSnackChoice.addEventListener('click', createChoiceMenuSnack);
btnDrinkChoice.addEventListener('click', createChoiceMenuDrink);
logOutButton.addEventListener('click', restartAndLogOut)
// Adding name and surname in field info person
popupButton.onclick = logDisplay;



// Menu. Array for choice menu. Can changing price, image, button and name -----------------------------------------------------------------------------------
const menuPizza = [
    { name: 'Mushrooms-Сheese', price: 30, img: `<img src='/img/pizzies/Mushrooms-Сheese-pizza.png' class='img-pizza'>` },
    { name: 'Omelette-pizza', price: 50, img: `<img src='/img/pizzies/Omelette-pizza.png' class='img-pizza'>` },
    { name: 'Roman-pizza', price: 30, img: `<img src='/img/pizzies/Roman-pizza.png' class='img-pizza'>` },
    { name: 'Royal-pizza', price: 60, img: `<img src='/img/pizzies/Royal-pizza.png' class='img-pizza'> ` },
    { name: 'Royal-two-pizza', price: 50, img: `<img src='/img/pizzies/Royal-two-pizza.png' class='img-pizza'>` },
    { name: 'Tomato-pizza', price: 60, img: `<img src='/img/pizzies/Tomato-pizza.png' class='img-pizza'>` },
    { name: 'DRAGON', price: 40, img: `<img src='/img/pizzies/DRAGON.png' class='img-pizza'>` },
    { name: 'Easy-pizza', price: 33, img: `<img src='/img/pizzies/Easy-pizza.png' class='img-pizza'> ` },
    { name: 'Marinara', price: 28, img: `<img src='/img/pizzies/Marinara.png' class='img-pizza'>` }
];
const menuBurger = [
    { name: 'Burger', price: 30, img: `<img src='/img/burgers/Burger1.png' class='img-burger'>` },
    { name: 'Double-cheeseburger', price: 50, img: `<img src='/img/burgers/Burger2.png' class='img-burger'>` },
    { name: 'Eggs-burger', price: 30, img: `<img src='/img/burgers/Burger3.png' class='img-burger'>` },
    { name: 'Gamburger', price: 60, img: `<img src='/img/burgers/Burger4.png' class='img-burger'>` },
    { name: 'Golden-burger', price: 50, img: `<img src='/img/burgers/Burger5.png' class='img-burger'>` },
    { name: 'BigBurger', price: 60, img: `<img src='/img/burgers/Burger6.png' class='img-burger'>` },
    { name: 'Cheeseburger', price: 40, img: `<img src='/img/burgers/Burger7.png' class='img-burger'>` },
    { name: 'BlackBurger', price: 33, img: `<img src='/img/burgers/Burger8.png' class='img-burger'>` },
    { name: 'Sausage-burger', price: 28, img: `<img src='/img/burgers/Burger9.png' class='img-burger'>` }
];
const menuSnack = [
    { name: 'Food1', price: 30, img: `<img src='/img/snacks/snack1.png' class='img-snack'>` },
    { name: 'Food2', price: 50, img: `<img src='/img/snacks/snack2.png' class='img-snack'>` },
    { name: 'Food3', price: 30, img: `<img src='/img/snacks/snack3.png' class='img-snack'>` },
    { name: 'Food4', price: 60, img: `<img src='/img/snacks/snack4.png' class='img-snack'>` },
    { name: 'Food5', price: 50, img: `<img src='/img/snacks/snack5.png' class='img-snack'>` },
    { name: 'Food6', price: 60, img: `<img src='/img/snacks/snack6.png' class='img-snack'>` }
];
const menuDrink = [
    { name: 'Cola', price: 30, img: `<img src='/img/drinks/drink1.png' class='img-drink'>` },
    { name: 'Sprite', price: 50, img: `<img src='/img/drinks/drink2.png' class='img-drink'>` },
    { name: 'Coffe', price: 30, img: `<img src='/img/drinks/drink3.png' class='img-drink'>` },
    { name: 'Tea', price: 60, img: `<img src='/img/drinks/drink4.png' class='img-drink'>` },
    { name: 'Tea2', price: 50, img: `<img src='/img/drinks/drink5.png' class='img-drink'>` },
    { name: 'Tea3', price: 60, img: `<img src='/img/drinks/drink6.png' class='img-drink'>` }
];



//Parts code for functions innerHTML to create food menu ------------
//Parts code for functions innerHTML to create food menu ------------
const menuInnerPizza = `<div class='block-pizza'>
        <div class='box-pizza'> ${menuPizza[0].img} <span> ${menuPizza[0].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-pizza'> ${menuPizza[1].img} <span> ${menuPizza[1].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-pizza'> ${menuPizza[2].img} <span> ${menuPizza[2].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        <div class='block-pizza'>
        <div class='box-pizza'> ${menuPizza[3].img} <span> ${menuPizza[3].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-pizza'> ${menuPizza[4].img} <span> ${menuPizza[4].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-pizza'> ${menuPizza[5].img} <span> ${menuPizza[5].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        <div class='block-pizza'>
        <div class='box-pizza'> ${menuPizza[6].img} <span> ${menuPizza[6].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-pizza'> ${menuPizza[7].img} <span> ${menuPizza[7].name} ${menuPizza[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-pizza'> ${menuPizza[7].img} <span> ${menuPizza[8].name} ${menuPizza[0].price}$</span>  <button class='btn-add'>Add</button></div>
        </div>
        `;
const menuInnerBurger = `<div class='block-burger'>
        <div class='box-burger'> ${menuBurger[0].img} <span>${menuBurger[0].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-burger'> ${menuBurger[1].img} <span>${menuBurger[1].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-burger'> ${menuBurger[2].img} <span>${menuBurger[2].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        <div class='block-burger'>
        <div class='box-burger'> ${menuBurger[3].img} <span>${menuBurger[3].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-burger'> ${menuBurger[4].img} <span>${menuBurger[4].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-burger'> ${menuBurger[5].img} <span>${menuBurger[5].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        <div class='block-burger'>
        <div class='box-burger'> ${menuBurger[6].img} <span>${menuBurger[6].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-burger'> ${menuBurger[7].img} <span>${menuBurger[7].name} ${menuBurger[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-burger'> ${menuBurger[8].img} <span>${menuBurger[8].name} ${menuBurger[0].price}$</span>  <button class='btn-add'>Add</button></div>
        </div>
        `;
const menuInnerSnacks = `<div class='block-snack'>
        <div class='box-snack'> ${menuSnack[0].img} <span>${menuSnack[0].name} ${menuSnack[0].price}$</span>  <button class='btn-add'>Add</button></div>
        <div class='box-snack'> ${menuSnack[1].img} <span>${menuSnack[1].name} ${menuSnack[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-snack'> ${menuSnack[2].img} <span>${menuSnack[2].name} ${menuSnack[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        <div class='block-snack'>
        <div class='box-snack'> ${menuSnack[3].img} <span>${menuSnack[3].name} ${menuSnack[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-snack'> ${menuSnack[4].img} <span>${menuSnack[4].name} ${menuSnack[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-snack'> ${menuSnack[5].img} <span>${menuSnack[5].name} ${menuSnack[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        `;
const menuInnerDrink = `<div class='block-drink'>
        <div class='box-drink'> ${menuDrink[0].img} <span>${menuDrink[0].name} ${menuDrink[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-drink'> ${menuDrink[1].img} <span>${menuDrink[1].name} ${menuDrink[0].price}$</span>  <button class='btn-add'>Add</button></div>
        <div class='box-drink'> ${menuDrink[2].img} <span>${menuDrink[2].name} ${menuDrink[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        <div class='block-drink'>
        <div class='box-drink'> ${menuDrink[3].img} <span>${menuDrink[3].name} ${menuDrink[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-drink'> ${menuDrink[4].img} <span>${menuDrink[4].name} ${menuDrink[0].price}$</span> <button class='btn-add'>Add</button></div>
        <div class='box-drink'> ${menuDrink[5].img} <span>${menuDrink[5].name} ${menuDrink[0].price}$</span> <button class='btn-add'>Add</button></div>
        </div>
        `;




// Functions ================

// Functions for person info. Adding in order Name and Surname
function logDisplay() {
    const valName = logName.value;
    const valSurname = logSurname.value;
    displayName.innerHTML = valName;
    displaySurname.innerHTML = valSurname;
}


// Open field to type name and surname
const openPopup = setTimeout(() => {
    const popupActive = document.querySelector('.popup');
    popupActive.classList.add('open');
}, 1000);


// CLose window with fields for type name and surname
function closePopup() {
    const popupActiveTwo = document.querySelector('.popup.open');
    popupActiveTwo.classList.remove('open');
}


// Function on choice menu. Create Burger, Snacks and Drinks lists. Code belowe
// Function on choice menu. Create Burger, Snacks and Drinks lists. Code belowe
function createChoiceMenuPizza() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML = menuInnerPizza;
};
function createChoiceMenuBurger() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML = menuInnerBurger;
};
function createChoiceMenuSnack() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML = menuInnerSnacks;
};
function createChoiceMenuDrink() {
    const menu = document.getElementById('menu-cards');
    menu.innerHTML = menuInnerDrink;
};

//Function restert page and reset name and surname
function restartAndLogOut() {
    location.reload()
}

// Вызываю функцию для первоночального появления выбора меню "Пиццы"
createChoiceMenuPizza();



