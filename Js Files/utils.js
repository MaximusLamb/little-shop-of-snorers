

export default function findById(id, itemArray) {

    for (let i = 0; i < itemArray.length; i++) {

        const array = itemArray[i];

        if (array.id === id) {
            return array;
        }
    }
    return null;
}


export function incrementTimesSeen(id, itemArray) {

    let itemSeen = findById(id, itemArray);
    if (!itemSeen) {
        addInitialItem(id, itemArray);
        itemSeen = findById(itemArray, id);

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