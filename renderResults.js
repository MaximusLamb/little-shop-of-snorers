



export default function renderResults(selectedProducts, products){

    const tr = document.createElement('tr');


    const nameCell = document.createElement('td');
    nameCell.className = 'align-center';
    nameCell.textContent = products.name;
    tr.appendChild(nameCell);
    
    const votesCell = document.createElement('td');
    votesCell.textContent = selectedProducts.votes;
    tr.appendChild(votesCell);

    const timesSeenCell = document.createElement('td');
    votesCell.textContent = selectedProducts.votes;
    tr.appendChild(timesSeenCell);
    
    return tr;
    
}