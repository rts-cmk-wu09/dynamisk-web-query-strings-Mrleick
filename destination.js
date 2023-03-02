// Hent alle destinationer fra destinations.json
fetch('data/destinations.json').then((response) => {
    return response.json();
}).then(data => {

    const detailview = document.getElementById('detailview');


    const imagecontainer = document.createElement('div');
    imagecontainer.classList.add('imagecontainer');
    imagecontainer.innerHTML = `
    
    `;
    detailview.appendChild(imagecontainer);

    const txtcontainer = document.createElement('div');
    txtcontainer.classList.add('txtcontainer');
    txtcontainer.innerHTML = `
    <h2 class="txtcontainer__town">KØBENHAVN</h2>
    <h1 class="txtcontainer__title">Penthouse, Solrig med 5 altaner</h1>
    <p class="txtcontainer__procent">100% af nylige gæster  har givet indtjekningen en femstjernet vurdering</p>
    <p class="txtcontainer__description">Lejligheden er stor og lys og har 5 mindre altaner og en terrasse. Der er 3 soveværeslder og 2 hemse med senge. Lejligheder ligger på Nørrebro, som er en farverig og livlig del af København. Det er gåafstand til cafe på Balders Plads, Nørrebrogade og 3,3 km til Nørreport St.</p>
    `;
    detailview.appendChild(txtcontainer);
});