const pokemonBase = "https://pokeapi.co/api/v2/pokemon-form";
const image = document.querySelector(".image");
const name = document.querySelector(".name");

/**
 *  Fetches a pokemon through pókeAPI.
 */
async function getData() {
    const randomPokemon = Math.floor(Math.random() * 150);

    //TODO - Mostrar bola
    return await fetch(`${pokemonBase}/${randomPokemon}/`)
        .then((response) => response.json())
        .then((data) => {
            image.src = data.sprites.front_default;
            name.innerText = data.name;
            //TODO-ocultar bola
        })
        .catch((error) => {
            console.error("Cannot get data", error);
        });
}

getData();

document.querySelector(".another-one-btn").addEventListener("click", getData);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./assets/js/serviceWorker.js")
        .then(function() {
            console.log("Service Worker Registered");
        });
}