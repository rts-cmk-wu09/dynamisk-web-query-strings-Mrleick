const destinations = document.getElementById('destinations');

fetch("data/destinations.json")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 8; i++) {
      const article = document.createElement('article');
      article.classList.add('destinations__article');
      
      const img = document.createElement('img');
      img.src = data.destinations[i].image;
      article.appendChild(img);
      
      destinations.appendChild(article);
    }
  });
