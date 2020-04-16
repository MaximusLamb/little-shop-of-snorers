import itemsArray from './imagearray.js';
import randomImage from './randomImage.js';
import { incrementTimesPicked, incrementTimesSeen } from './utils.js';


// const productImg = document.querySelectorAll('img');
// const itemsRadioTag = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');


// let clickCounter = 25;
// // let itemViewed = 0;
// // let timesPicked = 0;

// pull radio buttons from html and assign them 
const radioButton1 = document.getElementById('radio1');
const radioButton2 = document.getElementById('radio2');
const radioButton3 = document.getElementById('radio3');

// pull image id's from html and assign them
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');





function renderItems() {
    
    const item1 = randomImage(itemsArray);
    let item2 = randomImage(itemsArray);
    let item3 = randomImage(itemsArray);
    
    
    // set the value of the three radio buttons to the temporary items id
    
    while (item1 === item2 || item2 === item3 || item3 === item1) {
        
        item2 = randomImage(itemsArray);
        item3 = randomImage(itemsArray);
    }
    
    radioButton1.value = item1.id;
    radioButton2.value = item2.id;
    radioButton3.value = item3.id;

    image1.src = item1.image;
    image2.src = item2.image;
    image3.src = item3.image;
    
}

let itemsPickedArray = [];


nextButton.addEventListener('click', ()=> {
    event.preventDefault();
    const itemChecked = document.querySelector('input[type=radio]:checked');
    const itemChosen = itemChecked.value;
    
    incrementTimesSeen(itemChosen, itemsPickedArray);
    
    incrementTimesPicked(itemChosen, itemsPickedArray);
    
    saveToLocalStorage(itemsPickedArray);
    
    storeLocalData();
    
    renderItems();
    
    
});

// resultButton.addEventListener('submit', ()=> {

// })
renderItems();

function saveToLocalStorage(dataStorage) {
    const newlyStoredItem = JSON.stringify(dataStorage);
    localStorage.setItem('STORAGE', newlyStoredItem);
}

function storeLocalData() {

    const dataStorage = localStorage.getItem('STORAGE');

    if (dataStorage) {
        return JSON.parse(dataStorage);
    } else {
        return [];
    }

}

