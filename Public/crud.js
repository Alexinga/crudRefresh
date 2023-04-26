'use strict';
const inputElement = document.querySelector('.style-input');
const searchIcon = document.querySelector('.fa-search');
const itemNameContainer = document.querySelector('.item-name');
const containerUL = document.querySelector('.new-container-list');
const clearBtn = document.querySelector('.clear-btn');

const appValue = () => {
    //This grabs the value that is being typed by user;
    let inputValue = inputElement.value;

    //We are creating a parent div for li to live in
    const itemName = document.createElement("div");
    itemName.classList.add('item-name');

    //We are creating the li item for value to live in
    const item = document.createElement('li');
    item.classList.add('item')

    //The container is the main html code that will hold div and li
    containerUL.append(itemName);
    itemName.append(item);

    const itemIcons = document.createElement('div');
    itemIcons.className = ('item-icons');

    const trashIcon = document.createElement('i');
    trashIcon.className = ('fas fa-trash');

    const checkIcon = document.createElement('i');
    checkIcon.className = ('fas fa-check');

    itemName.append(itemIcons);
    itemIcons.append(checkIcon);
    itemIcons.append(trashIcon);

    //This outputs the value of what was typed
    item.textContent = inputValue;
    console.log(inputValue);


}

const createEvent = () => {
    let inputValue = inputElement.value.trim();
    if(inputValue === '') {
        alert('Please add an item')
    } else {
        appValue();
        inputElement.value = '';
    }
}


const updateEvent = (e) => {
    const eventItem = e.target;
    if(eventItem.classList[1] === 'fa-check') {
        let check = eventItem.parentElement.parentElement.firstChild;
        check.classList.toggle('checkGreen');
    }
    // console.log(eventItem.classList);
    // console.log(eventItem);
}

const deleteEvent = (e) => {
    const eventItem = e.target;
    if(eventItem.classList[1] === 'fa-trash') {
        if(confirm('Are you sure you want to delete item?')) {
            const todo = eventItem.parentElement.parentElement;
            todo.remove();
        }
    }
}

const clearAll = () => {
    while(containerUL.firstChild) {
        containerUL.removeChild(containerUL.firstChild);
    }
}
//Side note to remember is to dom traverse through the dom to get the green check for check icon
searchIcon.addEventListener('click', createEvent);
containerUL.addEventListener('click', updateEvent);
containerUL.addEventListener('click', deleteEvent);
clearBtn.addEventListener('click', clearAll);


// console.log('Lifting Weights repetition 1');

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting Weights repetition ${rep}`);
// }

// const alexArray = [
//     'Alex',
//     'Inga',
//     2023-1998,
//     'Front End Developer',
//     ['Jason', 'Long', 'Abby']
// ];

// const types = [];

// for(let i = 0; i <= alexArray.length; i++) {
//     if(typeof alexArray[i] !== 'string') break;
//     console.log(alexArray[i], typeof alexArray[i]);
// }
// console.log(types)

// This for loop adds new values into an new empty array
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     let currentYear = 2023;
//     ages.push(currentYear - years[i]);
// }
// console.log(ages);