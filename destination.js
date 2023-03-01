const detailview = document.getElementById('detailview');


const imagecontainer = document.createElement('div');
imagecontainer.classList.add('imagecontainer');
imagecontainer.innerHTML = `
    <img src="img_girl.jpg" alt="">
    `;
detailview.appendChild(imagecontainer);

const txtcontainer = document.createElement('div');
txtcontainer.classList.add('txtcontainer');
txtcontainer.innerHTML = `
    <h2>København</h2>
    `;
detailview.appendChild(txtcontainer);