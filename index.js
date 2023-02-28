const destinations = document.getElementById('destinations');

fetch("data/destinations.json")
  .then(response => response.json())
  .then(data => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Apartments for rent'; // Change the text content to your desired heading
    destinations.appendChild(h1);

    for (let i = 0; i < 8; i++) {
      const article = document.createElement('article');
      article.classList.add('destinations__article');

      const img = document.createElement('img');
      img.src = data.destinations[i].image;
      article.appendChild(img);

      destinations.appendChild(article);
    }
  });
