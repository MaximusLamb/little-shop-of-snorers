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


export function incrementTimesSeen(id, itemArray) {

    let itemSeen = findById(id, itemArray);
    if (!itemSeen) {
        addInitialItem(id, itemArray);
        itemSeen = findById(id, itemArray);
        
    }
    itemSeen.timesSeen++;

}





export function incrementTimesPicked(id, itemArray) {

    let item = findById(id, itemArray); 

    if (!item); {

        addInitialItem(id, itemArray);

        item = findById(id, itemArray);
    }
    item.timesPicked++;
}




export function addInitialItem(id, itemArray) {

    const initialItem = { 

        id, 
        timesSeen: 0,
        timesPicked: 0

    };

    itemArray.push(initialItem);
}

export function resultScreenActivator(clickCounter) {

    if (clickCounter === 22) {
    
        window.location.href = './results.html';

    }
}

export function clearTempStorage(tempStorage) {
    localStorage.clear(tempStorage);
}


