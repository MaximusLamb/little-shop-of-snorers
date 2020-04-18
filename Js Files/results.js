import { clearTempStorage } from './utils.js';

const returnButton = document.getElementById('return-button');

returnButton.addEventListener('click', () => {
    

    
    const tempStorage = localStorage.getItem('STORAGE');
    const wipedStorage = JSON.parse(tempStorage);
    clearTempStorage(wipedStorage);
    window.location.href = './index.html';
    // renderItems();
});
