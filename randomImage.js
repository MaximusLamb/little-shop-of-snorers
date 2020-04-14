import items from "./imagearray.js"


export default function randomImage(items) {
    const randomImageChooser = Math.floor(Math.random() * 20);

    return items[randomImageChooser];
}