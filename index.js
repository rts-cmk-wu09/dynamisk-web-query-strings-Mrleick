const destinationList = document.getElementById('destination-list');

// Hent alle destinationer fra destinations.json
fetch('data/destinations.json')
  .then(response => response.json())
  .then(destinations => {

    // Opret et <li> element for hver destination
    destinationsArray.forEach(destination => {
      const listItem = document.createElement('li');
      listItem.classList.add('destination');
      listItem.dataset.id = destination.id;
      listItem.innerHTML = `
        <img src="img/${destination.image}" alt="${destination.name}">
        <h2>${destination.name}</h2>
        <p>${destination.description}</p>
      `;
      destinationList.appendChild(listItem);
    });
  });
