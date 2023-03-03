const destinationList = document.getElementById('destination-list');

// Hent alle destinationer fra destinations.json
fetch('data/destinations.json').then((response) => {
return response.json();
}).then(data =>{
  
    
    // Opret et <li> element for hver destination
    data.destinations.forEach(destination => {
      const listItem = document.createElement('li');
      listItem.classList.add('destination');
      listItem.innerHTML = `
      <a href="destination.html?id=${destination.id}">
        <img class="detailview__img" src="./img/${destination.image}" alt="${destination.destination}">
        <h2>${destination.destination}</h2>
        <p>${destination.title}</p></a>
      `;
      destinationList.appendChild(listItem);
    });


  });
