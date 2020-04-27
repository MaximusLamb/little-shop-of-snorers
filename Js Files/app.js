import itemsArray from './imagearray.js';
import randomImage from './randomImage.js';
import { incrementer, resultScreenActivator } from './utils.js';



const nextButton = document.getElementById('next-button');


// pull radio buttons from html and assign them 
const radioButton1 = document.getElementById('radio1');
const radioButton2 = document.getElementById('radio2');
const radioButton3 = document.getElementById('radio3');

// pull image id's from html and assign them
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');





export default function renderItems() {
    
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

let clickCounter = 25;
let itemsPickedArray = [];
let allTimeResults;

let allTimeResultsStorage = localStorage.getItem('PERMASTORAGE');
if (allTimeResultsStorage) {
    let parsedAllTimesResultsStorage = JSON.parse(allTimeResultsStorage);

    allTimeResults = parsedAllTimesResultsStorage;
} else {
    allTimeResults = [];
}



nextButton.addEventListener('click', () => {
    const itemChecked = document.querySelector('input[type=radio]:checked');
    const itemChosen = itemChecked.value;

    incrementer(itemChosen, itemsPickedArray);
    incrementer(itemChosen, allTimeResults);

    function saveToLocalStorage(dataStorage, permaDataStorage) {
        const newlyStoredItem = JSON.stringify(dataStorage);
        const permaStorage = JSON.stringify(permaDataStorage);
        localStorage.setItem('STORAGE', newlyStoredItem);
        localStorage.setItem('PERMASTORAGE', permaStorage);
    }
    
    saveToLocalStorage(itemsPickedArray, allTimeResults);
    
    renderItems();
    
    clickCounter--;
    
    resultScreenActivator(clickCounter);
    
});

renderItems();
