import items from './imagearray.js';
import randomImage from './randomImage.js';

// const productImg = document.querySelectorAll('img');
// const itemsRadioTag = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');



// const radioButton1 = document.getElementById('radio1');
// const radioButton2 = document.getElementById('radio2');
// const radioButton3 = document.getElementById('radio3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');


renderItems(); 


// let itemCounter = 25;


// radioButton1.value = item1.id;
// radioButton2.value = item2.id;
// radioButton3.value = item3.id;


function renderItems() {

    const item1 = randomImage(items);
    let item2 = randomImage(items);
    let item3 = randomImage(items);
    
    
    while (item1 === item2 || item2 === item3 || item3 === item1) {
        
        item2 = randomImage(items);
        item3 = randomImage(items);
    }
    image1.src = item1.image;
    image2.src = item2.image;
    image3.src = item3.image;
    
    
}


nextButton.addEventListener('click', ()=> {
    
    const itemChecked = document.querySelector('input[type=radio]:checked');

    // let gameCounter = 25;

    
    renderItems(itemChecked);
    
});



