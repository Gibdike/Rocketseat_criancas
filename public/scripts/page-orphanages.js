const mymap = L.map('mapid').setView([-15.60086, -56.09682], 15);
//Tile Map
L
    .tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', ).addTo(mymap);
//Icon Map
const icon = L.icon({
        iconUrl: "./public/img/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popAnchor: [170, 2]
    })
    //Popup ovarlay
const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/img/arrow-white.svg"> </a>')
    //Marker Map
L
    .marker([-15.60086, -56.09682], { icon })
    .addTo(mymap)
    .bindPopup(popup)