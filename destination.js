const params = new URLSearchParams(document.location.search);
const id = params.get("id");

fetch(`./data/${id}.json`)
  .then((response) => response.json())
  .then((data) => {
    
const detailview = document.getElementById('detailview');


const imagecontainer = document.createElement('div');
imagecontainer.classList.add('imagecontainer');
imagecontainer.innerHTML = `
<img class="imagecontainer__img" src="img/${data.image}"></img>
`;
detailview.appendChild(imagecontainer);

const txtcontainer = document.createElement('div');
txtcontainer.classList.add('txtcontainer');
txtcontainer.innerHTML = `
<h2 class="txtcontainer__town">${data.destination}</h2>
<h1 class="txtcontainer__title">${data.title}</h1>
<p class="txtcontainer__procent">${data.subtitle}</p>
<p class="txtcontainer__description">${data.text}</p>
<h3>Faciliteter</h3>
<ul class="txtcontainer__list">
${data.facilities.map(facility => `<li>${facility}</li>`).join('')}
</ul>
`;
detailview.appendChild(txtcontainer);

  })

