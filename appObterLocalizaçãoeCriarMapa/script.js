//variáveis
let h2 = document.querySelector('h2');

var map;

//funções
function success(position){
    //Pegando localização
    h2.textContent = `Latitude:${position.coords.latitude}, Longitude:${position.coords.longitude}`
    //Criando mapa
    if (map === undefined) {
        map = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 10);
    } else {
        map.remove();
        map = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 10);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup('Você está aqui!')
        .openPopup();
}

function error(error){
    h2.textContent = error.message
}

//métodos
navigator.geolocation.getCurrentPosition(success, error);

//ou, para seguir a posição + terceiro parametro(objeto)=

/*
var watchId = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000 //parar de buscar a localização após esse tempo
});
*/