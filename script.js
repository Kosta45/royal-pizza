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
const logOutButton = document.querySelector('.log-out-nav');
const boxPizzaOne = document.querySelector('.box-1');

// Adding Event Listener
popupButton.addEventListener('click', closePopup);
btnPizzaChoice.addEventListener('click', createChoiceMenuPizza);
btnBurgerChoice.addEventListener('click', createChoiceMenuBurger);
btnSnackChoice.addEventListener('click', createChoiceMenuSnack);
btnDrinkChoice.addEventListener('click', createChoiceMenuDrink);
logOutButton.addEventListener('click', restartAndLogOut);
document.addEventListener('click', createFillingPizza);
// Adding name and surname in field info person
popupButton.onclick = logDisplay;



// Menu. Array for choice menu. Can changing price, image, button and name -----------------------------------------------------------------------------------
const menuPizza = [
    {
        vendorCode: 'piz0000',
        name: 'Mushrooms-Сheese',
        price: 30,
        img: `<img src='/img/pizzies/Mushrooms-Сheese-pizza.png' class='img-pizza'>`,
        btns: `<div>
                    <button class='btn-add' data-id='piz0000'>Add</button>
                    <button class='btn-info' data-id='piz0000'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> 
                    <ul>
                        <li>Salami</li>
                        <li>Cheese</li>
                        <li>Mushrooms</li>
                        <li>Olives</li>
                        <li>Parsley</li>
                    </ul>
                    <button>Back</button>
                </div>`
    },
    {
        vendorCode: 'piz0001',
        name: 'Omelette-pizza',
        price: 50,
        img: `<img src='/img/pizzies/Omelette-pizza.png' class='img-pizza'>`,
        btns: `<div>
                    <button class='btn-add' data-id='piz0001'>Add</button>
                    <button class='btn-info' data-id='piz0001'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> yra i smog </div>`
    },
    {
        vendorCode: 'piz0002',
        name: 'Roman-pizza',
        price: 30,
        img: `<img src='/img/pizzies/Roman-pizza.png' class='img-pizza'>`,
        btns: `<div>
                    <button class='btn-add' data-id='piz0002'>Add</button>
                    <button class='btn-info' data-id='piz0002'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> lada sedan govno </div>`
    },
    {
        vendorCode: 'piz0003',
        name: 'Royal-pizza',
        price: 60,
        img: `<img src='/img/pizzies/Royal-pizza.png' class='img-pizza'> `,
        btns: `<div>
                    <button class='btn-add' data-id='piz0003'>Add</button>
                    <button class='btn-info' data-id='piz0003'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> lada sedan govno </div>`
    },
    {
        vendorCode: 'piz0004',
        name: 'Royal-two-pizza',
        price: 50,
        img: `<img src='/img/pizzies/Royal-two-pizza.png' class='img-pizza'>`,
        btns: `<div>
                    <button class='btn-add' data-id='piz0004'>Add</button>
                    <button class='btn-info' data-id='piz0004'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> lada sedan govno </div>`
    },
    {
        vendorCode: 'piz0005',
        name: 'Tomato-pizza',
        price: 60,
        img: `<img src='/img/pizzies/Tomato-pizza.png' class='img-pizza'>`,
        btns: `<div>
                    <button class='btn-add' data-id='piz0005'>Add</button>
                    <button class='btn-info' data-id='piz0005'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> lada sedan govno </div>`
    },
    {
        vendorCode: 'piz0006',
        name: 'DRAGON',
        price: 40,
        img: `<img src='/img/pizzies/DRAGON.png' class='img-pizza'>`,
        btns: `<div>
                    <button class='btn-add' data-id='piz0006'>Add</button>
                    <button class='btn-info' data-id='piz0006'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> lada sedan govno </div>`
    },
    {
        vendorCode: 'piz0007',
        name: 'Easy-pizza',
        price: 33,
        img: `<img src='/img/pizzies/Easy-pizza.png' class='img-pizza'> `,
        btns: `<div>
                    <button class='btn-add' data-id='piz0007'>Add</button>
                    <button class='btn-info' data-id='piz0007'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'>  </div>`
    },
    {
        vendorCode: 'piz0008',
        name: 'Marinara',
        price: 28,
        img: `<img src='/img/pizzies/Marinara.png' class='img-pizza'>`,
        btns: `<div>
                    <button class='btn-add' data-id='piz0008'>Add</button>
                    <button class='btn-info' data-id='piz0008'>Filling</button>
                </div>`,
        filling: `<div class='box-filling-pizza'> lada sedan govno </div>`
    }
];
const menuBurger = [
    { vendorCode: 'brg0000', name: 'Burger', price: 30, img: `<img src='/img/burgers/Burger1.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0000'>Add</button>` },
    { vendorCode: 'brg0001', name: 'Double-cheeseburger', price: 50, img: `<img src='/img/burgers/Burger2.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0001'>Add</button>` },
    { vendorCode: 'brg0002', name: 'Eggs-burger', price: 30, img: `<img src='/img/burgers/Burger3.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0002'>Add</button>` },
    { vendorCode: 'brg0003', name: 'Gamburger', price: 60, img: `<img src='/img/burgers/Burger4.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0003'>Add</button>` },
    { vendorCode: 'brg0004', name: 'Golden-burger', price: 50, img: `<img src='/img/burgers/Burger5.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0004'>Add</button>` },
    { vendorCode: 'brg0005', name: 'BigBurger', price: 60, img: `<img src='/img/burgers/Burger6.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0005'>Add</button>` },
    { vendorCode: 'brg0006', name: 'Cheeseburger', price: 40, img: `<img src='/img/burgers/Burger7.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0006'>Add</button>` },
    { vendorCode: 'brg0007', name: 'BlackBurger', price: 33, img: `<img src='/img/burgers/Burger8.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0007'>Add</button>` },
    { vendorCode: 'brg0008', name: 'Sausage-burger', price: 28, img: `<img src='/img/burgers/Burger9.png' class='img-burger'>`, btn: `<button class='btn-add' data-id='brg0008'>Add</button>` }
];
const menuSnack = [
    { vendorCode: 'snc0000', name: 'Food1', price: 30, img: `<img src='/img/snacks/snack1.png' class='img-snack'>`, btn: `<button class='btn-add' data-id='snc0000'>Add</button>` },
    { vendorCode: 'snc0001', name: 'Food2', price: 50, img: `<img src='/img/snacks/snack2.png' class='img-snack'>`, btn: `<button class='btn-add' data-id='snc0001'>Add</button>` },
    { vendorCode: 'snc0002', name: 'Food3', price: 30, img: `<img src='/img/snacks/snack3.png' class='img-snack'>`, btn: `<button class='btn-add' data-id='snc0002'>Add</button>` },
    { vendorCode: 'snc0003', name: 'Food4', price: 60, img: `<img src='/img/snacks/snack4.png' class='img-snack'>`, btn: `<button class='btn-add' data-id='snc0003'>Add</button>` },
    { vendorCode: 'snc0004', name: 'Food5', price: 50, img: `<img src='/img/snacks/snack5.png' class='img-snack'>`, btn: `<button class='btn-add' data-id='snc0004'>Add</button>` },
    { vendorCode: 'snc0005', name: 'Food6', price: 60, img: `<img src='/img/snacks/snack6.png' class='img-snack'>`, btn: `<button class='btn-add' data-id='snc0005'>Add</button>` }
];
const menuDrink = [
    { vendorCode: 'drk0000', name: 'Cola', price: 30, img: `<img src='/img/drinks/drink1.png' class='img-drink'>`, btn: `<button class='btn-add' data-id='drk0000'>Add</button>` },
    { vendorCode: 'drk0001', name: 'Sprite', price: 50, img: `<img src='/img/drinks/drink2.png' class='img-drink'>`, btn: `<button class='btn-add' data-id='drk0001'>Add</button>` },
    { vendorCode: 'drk0002', name: 'Coffe', price: 30, img: `<img src='/img/drinks/drink3.png' class='img-drink'>`, btn: `<button class='btn-add' data-id='drk0002'>Add</button>` },
    { vendorCode: 'drk0003', name: 'Tea', price: 60, img: `<img src='/img/drinks/drink4.png' class='img-drink'>`, btn: `<button class='btn-add' data-id='drk0003'>Add</button>` },
    { vendorCode: 'drk0004', name: 'Tea2', price: 50, img: `<img src='/img/drinks/drink5.png' class='img-drink'>`, btn: `<button class='btn-add' data-id='drk0004'>Add</button>` },
    { vendorCode: 'drk0005', name: 'Tea3', price: 60, img: `<img src='/img/drinks/drink6.png' class='img-drink'>`, btn: `<button class='btn-add' data-id='drk0005'>Add</button>` }
];



//Parts code for functions innerHTML to create food menu ------------
//Parts code for functions innerHTML to create food menu ------------
const menuInnerPizza = `<div class='block-pizza'>
        <div class='box-pizza box-1'> ${menuPizza[0].img} <span> ${menuPizza[0].name} ${menuPizza[0].price}$</span> ${menuPizza[0].btns} </div>
        <div class='box-pizza box-2'> ${menuPizza[1].img} <span> ${menuPizza[1].name} ${menuPizza[0].price}$</span> ${menuPizza[1].btns} </div>
        <div class='box-pizza box-3'> ${menuPizza[2].img} <span> ${menuPizza[2].name} ${menuPizza[0].price}$</span> ${menuPizza[2].btns} </div>
        </div>
        <div class='block-pizza'>
        <div class='box-pizza box-4'> ${menuPizza[3].img} <span> ${menuPizza[3].name} ${menuPizza[0].price}$</span> ${menuPizza[3].btns} </div>
        <div class='box-pizza box-5'> ${menuPizza[4].img} <span> ${menuPizza[4].name} ${menuPizza[0].price}$</span> ${menuPizza[4].btns} </div>
        <div class='box-pizza box-6'> ${menuPizza[5].img} <span> ${menuPizza[5].name} ${menuPizza[0].price}$</span> ${menuPizza[5].btns} </div>
        </div>
        <div class='block-pizza'>
        <div class='box-pizza box-7'> ${menuPizza[6].img} <span> ${menuPizza[6].name} ${menuPizza[0].price}$</span> ${menuPizza[6].btns} </div>
        <div class='box-pizza box-8'> ${menuPizza[7].img} <span> ${menuPizza[7].name} ${menuPizza[0].price}$</span> ${menuPizza[7].btns} </div>
        <div class='box-pizza box-9'> ${menuPizza[7].img} <span> ${menuPizza[8].name} ${menuPizza[0].price}$</span> ${menuPizza[8].btns} </div>
        </div>
        `;
const menuInnerBurger = `<div class='block-burger'>
        <div class='box-burger'> ${menuBurger[0].img} <span>${menuBurger[0].name} ${menuBurger[0].price}$</span> ${menuBurger[0].btn} </div>
        <div class='box-burger'> ${menuBurger[1].img} <span>${menuBurger[1].name} ${menuBurger[0].price}$</span> ${menuBurger[1].btn} </div>
        <div class='box-burger'> ${menuBurger[2].img} <span>${menuBurger[2].name} ${menuBurger[0].price}$</span> ${menuBurger[2].btn} </div>
        </div>
        <div class='block-burger'>
        <div class='box-burger'> ${menuBurger[3].img} <span>${menuBurger[3].name} ${menuBurger[0].price}$</span> ${menuBurger[3].btn} </div>
        <div class='box-burger'> ${menuBurger[4].img} <span>${menuBurger[4].name} ${menuBurger[0].price}$</span> ${menuBurger[4].btn} </div>
        <div class='box-burger'> ${menuBurger[5].img} <span>${menuBurger[5].name} ${menuBurger[0].price}$</span> ${menuBurger[5].btn} </div>
        </div>
        <div class='block-burger'>
        <div class='box-burger'> ${menuBurger[6].img} <span>${menuBurger[6].name} ${menuBurger[0].price}$</span> ${menuBurger[6].btn} </div>
        <div class='box-burger'> ${menuBurger[7].img} <span>${menuBurger[7].name} ${menuBurger[0].price}$</span> ${menuBurger[7].btn} </div>
        <div class='box-burger'> ${menuBurger[8].img} <span>${menuBurger[8].name} ${menuBurger[0].price}$</span> ${menuBurger[8].btn} </div>
        </div>
        `;
const menuInnerSnacks = `<div class='block-snack'>
        <div class='box-snack'> ${menuSnack[0].img} <span>${menuSnack[0].name} ${menuSnack[0].price}$</span> ${menuSnack[0].btn} </div>
        <div class='box-snack'> ${menuSnack[1].img} <span>${menuSnack[1].name} ${menuSnack[0].price}$</span> ${menuSnack[1].btn} </div>
        <div class='box-snack'> ${menuSnack[2].img} <span>${menuSnack[2].name} ${menuSnack[0].price}$</span> ${menuSnack[2].btn} </div>
        </div>
        <div class='block-snack'>
        <div class='box-snack'> ${menuSnack[3].img} <span>${menuSnack[3].name} ${menuSnack[0].price}$</span> ${menuSnack[3].btn} </div>
        <div class='box-snack'> ${menuSnack[4].img} <span>${menuSnack[4].name} ${menuSnack[0].price}$</span> ${menuSnack[4].btn} </div>
        <div class='box-snack'> ${menuSnack[5].img} <span>${menuSnack[5].name} ${menuSnack[0].price}$</span> ${menuSnack[5].btn} </div>
        </div>
        `;
const menuInnerDrink = `<div class='block-drink'>
        <div class='box-drink'> ${menuDrink[0].img} <span>${menuDrink[0].name} ${menuDrink[0].price}$</span> ${menuDrink[0].btn} </div>
        <div class='box-drink'> ${menuDrink[1].img} <span>${menuDrink[1].name} ${menuDrink[0].price}$</span> ${menuDrink[1].btn} </div>
        <div class='box-drink'> ${menuDrink[2].img} <span>${menuDrink[2].name} ${menuDrink[0].price}$</span> ${menuDrink[2].btn} </div>
        </div>
        <div class='block-drink'>
        <div class='box-drink'> ${menuDrink[3].img} <span>${menuDrink[3].name} ${menuDrink[0].price}$</span> ${menuDrink[3].btn} </div>
        <div class='box-drink'> ${menuDrink[4].img} <span>${menuDrink[4].name} ${menuDrink[0].price}$</span> ${menuDrink[4].btn} </div>
        <div class='box-drink'> ${menuDrink[5].img} <span>${menuDrink[5].name} ${menuDrink[0].price}$</span> ${menuDrink[5].btn} </div>
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

// function create pop - op info pizza. 
function createFillingPizza(event) {
    // selectors - селекторы
    const boxPizza1 = document.querySelector('.box-1');
    const boxPizza2 = document.querySelector('.box-2');
    const boxPizza3 = document.querySelector('.box-3');
    const boxPizza4 = document.querySelector('.box-4');
    const boxPizza5 = document.querySelector('.box-5');
    const boxPizza6 = document.querySelector('.box-6');
    const boxPizza7 = document.querySelector('.box-7');
    const boxPizza8 = document.querySelector('.box-8');
    const boxPizza9 = document.querySelector('.box-9');

    // condition - условие
    if (event.target.dataset.id === 'piz0000') {
        console.log(event.target.dataset.id);
        displayFillingPizza(boxPizza1, menuPizza[0].filling);
    } else if (event.target.dataset.id === 'piz0001') {
        displayFillingPizza(boxPizza2, menuPizza[1].filling);
    } else if (event.target.dataset.id === 'piz0002') {
        displayFillingPizza(boxPizza3, menuPizza[2].filling);
    } else if (event.target.dataset.id === 'piz0003') {
        displayFillingPizza(boxPizza4, menuPizza[3].filling);
    } else if (event.target.dataset.id === 'piz0004') {
        displayFillingPizza(boxPizza5, menuPizza[4].filling);
    } else if (event.target.dataset.id === 'piz0005') {
        displayFillingPizza(boxPizza6, menuPizza[5].filling);
    } else if (event.target.dataset.id === 'piz0006') {
        displayFillingPizza(boxPizza7, menuPizza[6].filling);
    } else if (event.target.dataset.id === 'piz0007') {
        displayFillingPizza(boxPizza8, menuPizza[7].filling);
    } else if (event.target.dataset.id === 'piz0008') {
        displayFillingPizza(boxPizza9, menuPizza[8].filling);
    }
}

function displayFillingPizza(elemBlock, elemFilling) {
    elemBlock.innerHTML = elemFilling;
}



// Вызываю функцию для первоночального появления выбора меню "Пиццы"
createChoiceMenuPizza();



