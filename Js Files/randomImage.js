

export default function randomImage(itemsArray) {
    const randomImageChooser = Math.floor(Math.random() * 20);
    return itemsArray[randomImageChooser];
}
