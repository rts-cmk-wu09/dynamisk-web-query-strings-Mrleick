// Hent alle destinationer fra destinations.json
fetch('data/destinations.json').then((response) => {
  return response.json();
}).then(data =>{
  
    const destinationList = document.getElementById('destination-list');
    // Opret et <li> element for hver destination
    data.destinations.forEach(destination => {
      const listItem = document.createElement('li');
      listItem.classList.add('destination');
      listItem.dataset.id = destination.id;
      listItem.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <h2>${destination.destination}</h2>
        <p>${destination.title}</p>
      `;
      destinationList.appendChild(listItem);
    });


  });
