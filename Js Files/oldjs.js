export default function renderLineItem(cartItem, instrument) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = instrument.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = '$' + instrument.price.toFixed(2);

    const totalTd = document.createElement('td');
    totalTd.textContent = '$' + (cartItem.quantity * instrument.price).toFixed(2);

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}