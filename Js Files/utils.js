// import renderItems from './app.js';

// const returnButton = document.getElementById('return-button');

export default function findById(id, itemArray) {

    for (let i = 0; i < itemArray.length; i++) {

        const array = itemArray[i];

        if (array.id === id) {
            return array;
        }
    }
}


export function incrementer(id, itemArray) {

    
    let itemSeen = findById(id, itemArray);
    
    if (!itemSeen) {
        addInitialItem(id, itemArray);
    }
    itemSeen = findById(id, itemArray);
    itemSeen.timesSeen++;
    itemSeen.timesPicked++;
}

export function resultScreenActivator(clickCounter) {
    
    if (clickCounter === 0) {
        
        window.location.href = './results.html';
        
    }
}

function addInitialItem(id, itemArray) {

    const initialItem = { 

        id, 
        timesSeen: 0,
        timesPicked: 0

    };
    itemArray.push(initialItem);
}
    

