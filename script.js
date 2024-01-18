document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json') // Replace 'data.json' with the path to your JSON file
        .then(response => response.json())
        .then(data => displayCardsInGrid(data))
        .catch(error => console.error('Error fetching data:', error));
});

let flippedCard = null;

function displayCardsInGrid(data) {
    const gridContainer = document.getElementById('app');
    gridContainer.classList.add('card-grid'); // Add a class for styling the grid

    data.forEach(employee => {
        const card = document.createElement('div');
        card.className = 'card';

        const front = document.createElement('div');
        front.className = 'front';

        const img = document.createElement('img');
        img.src = employee.photo_pro;
        img.alt = employee.prenom;

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const name = document.createElement('p');
        name.textContent = `${employee.prenom} ${employee.nom}`;

        cardContent.appendChild(name);
        front.appendChild(img);
        front.appendChild(cardContent);

        const back = document.createElement('div');
        back.className = 'back';

        const imgBack = document.createElement('img');
        imgBack.src = employee.photo_fun;
        imgBack.alt = 'Fun Photo';

        imgBack.style.maxWidth = '80%';
        imgBack.style.maxHeight = '100%';

        back.appendChild(imgBack);

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', function () {
            if (flippedCard && flippedCard !== card) {
                flippedCard.classList.remove('flipped');
            }

            card.classList.toggle('flipped');
            flippedCard = card;
        });

        gridContainer.appendChild(card);
    });
}
