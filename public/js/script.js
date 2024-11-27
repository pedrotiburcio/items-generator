const quantity = document.getElementById('quantity');
const itemsList = document.getElementById('itemsList');

quantity.addEventListener('keyup', function (e) {
    const items = e.target.value;
    itemsList.innerHTML = '';
    
    for(let i = 1; i <= items; i++) {
        const listItem = document.createElement('li');
        const circle = document.createElement('div');

        listItem.appendChild(circle);
        
        circle.classList.add('circle');
        circle.textContent = `${i}`;
        
        itemsList.appendChild(listItem);
    }
});