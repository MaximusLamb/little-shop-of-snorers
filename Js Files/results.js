import { clearTempStorage } from './utils.js';

const returnButton = document.getElementById('return-button');

returnButton.addEventListener('click', () => {
    console.log('hello');

    
    const tempStorage = localStorage.getItem('STORAGE');
    const wipedStorage = JSON.parse(tempStorage);
    clearTempStorage(wipedStorage);
    window.location.href = './index.html';
    // renderItems();
});
