console.log(" app.js tamo ready");


const pokemonBase = "https://pokeapi.co/api/v2/pokemon-form";

const image = document.querySelector(".image");
const name = document.querySelector(".name");

async function getData() {
    return await fetch(pokemonBase + "/132/")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        image.src = data.sprites.front_default;
        name.innerText = data.name;
    })
    .catch(error => {
        console.error('can not get data', error)
    })
}

getData();


// index.js
if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./assets/js/serviceWorker.js')
    .then(function() { console.log('Service Worker Registered'); });
    }