import randomImage from "./randomImage.js"
import items from "./imagearray.js"

const productImg = document.querySelectorAll('img');
const secondImage = document.getElementById("image2");
const thirdImage = document.getElementById("image3");
const productRadioTag = document.querySelectorAll('input');


getThreeRandoms(items) {
    let randomProductOne = randomImage(items)
    let randomProductTwo = randomImage(items)
    let randomProductThree = randomImage(items)  
// done i think
while (randomProductOne.id === randomProductTwo.id || 
randomProductOne.id === randomProductThree.id || 
randomProductTwo.id === randomProductThree.id) {
    chosenProductOne = getRandomProduct();
    chosenProductTwo = getRandomProduct();
    chosenProductThree = getRandomProduct();
}
}

// display the images on the HTML
export function renderRandomImages(items) {
    
    firstImage.src = items[0].bag.image;
}
renderRandomImages();

const product1 = items[0];
const product2 = items[1];
const product3 = items[2];

const productRadioTag1 = productRadioTag[0];
const productRadioTag2 = productRadioTag[1];
const productRadioTag3 = productRadioTag[2];

const productImageTag1 = productImg[0];
const productImageTag2 = productImg[1];
const productImageTag3 = productImg[2];

productImageTag1.src = product1.img;
productImageTag2.src = product2.img;
productImageTag3.src = product3.img;