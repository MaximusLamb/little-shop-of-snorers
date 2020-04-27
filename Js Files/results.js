import { clearTempStorage } from './utils.js';


const results = JSON.parse(localStorage.getItem('STORAGE'));
// const permaResults = JSON.parse(localStorage.getItem('PERMASTORAGE'));

const listResults = document.getElementById('results');
// const permaListResults = document.getElementById('permaResults');




results.forEach((object) => {
    const list = document.createElement('li');
    listResults.append(list);
    const name = document.createElement('p');
    const timesSeen = document.createElement('p');
    const timesPicked = document.createElement('p');
    list.append(name, timesSeen, timesPicked);
    name.textContent = object.id;
    timesSeen.textContent = 'Times Seen: ' + object.timesSeen;
    timesPicked.textContent = 'Times Picked: ' + object.timesPicked;
});

// permaResults.forEach((object) => {
//     const list = document.createElement('li');
//     permaListResults.append(list);
//     const name = document.createElement('p');
//     const timesSeen = document.createElement('p');
//     const timesPicked = document.createElement('p');
//     list.append(name, timesSeen, timesPicked);
//     name.textContent = object.id;
//     timesSeen.textContent = 'Times Seen: ' + object.timesSeen;
//     timesPicked.textContent = 'Times Picked: ' + object.timesPicked;
// });

const names = [];
const votes = [];

results.forEach(item => {
    const label = item.id;
    const datapoint = item.timesPicked;
    votes.push(datapoint);
    names.push(label);
});


const chart = document.getElementById('chart').getContext('2d');
// const permaChart = document.getElementById('perma-chart').getContext('2d');

new Chart(chart, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Times Voted',
            data: votes,
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'teal', 'black', 'brown', 'limegreen', 'pink', 'violet', 'red', 'lightblue', 'purple', 'aqua', 'forestgreen', 'salmon', 'magenta', 'brown', 'red'],
            borderColor: ['black', 'red', 'green', 'blue', 'orange', 'yellow'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// new Chart(permaChart, {
//     type: 'bar',
//     data: {
//         labels: names,
//         datasets: [{
//             label: 'Overall Times Voted',
//             data: votes,
//             backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'teal', 'black', 'brown', 'limegreen', 'pink', 'violet', 'red', 'lightblue', 'purple', 'aqua', 'forestgreen', 'salmon', 'magenta', 'brown', 'red']
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

const returnButton = document.getElementById('return-button');

returnButton.addEventListener('click', () => {
    

    
    const tempStorage = localStorage.getItem('STORAGE');
    const wipedStorage = JSON.parse(tempStorage);
    // const permaStorage = localStorage.getItem('PERMASTORAGE');
    // const permanentStorage = localStorage.parse(wipedStorage);
    clearTempStorage(wipedStorage);
    window.location.href = './index.html';
});


