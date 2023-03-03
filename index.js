const destinationList = document.getElementById('destination-list');

// Min html opsætning
fetch('data/destinations.json')
  .then(response => response.json())
  .then(data => {
    data.destinations.forEach(destination => {
      const listItem = document.createElement('li');
      listItem.classList.add('destination');
      listItem.innerHTML = `
        <i class="fa-regular fa-heart"></i>
        <a href="destination.html?id=${destination.id}">
          <img class="destination__img" src="./img/${destination.image}" alt="${destination.destination}">
          <h2>${destination.destination}</h2>
          <p>${destination.title}</p>
        </a>
      `;

      // Mit hjerteikon like
      const heartLike = listItem.querySelector('.fa-heart');
      heartLike.addEventListener('click', () => {
        heartLike.classList.toggle('fa-solid');
        localStorage.setItem(destination.id, heartLike.classList.contains('fa-solid'));
      });

      // Sæt hjerteikonets tilstand baseret på localStorage
      const heartSolid = localStorage.getItem(destination.id);
      if (heartSolid === 'true') {
        heartLike.classList.add('fa-solid');
      }

      destinationList.appendChild(listItem);
    });
  });

