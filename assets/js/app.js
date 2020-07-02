const pokemonBase = "https://pokeapi.co/api/v2/pokemon-form";
const pokemonImage = document.querySelector(".pokemon-image");
const name = document.querySelector(".name");

const pokeball = document.querySelector(".pokeball");
const openPokeball = document.querySelector(".open-pokeball")

/**
 *  Fetches a pokemon through pókeAPI.
 */
async function getData() {
    const randomPokemon = Math.floor(Math.random() * 150);

    //TODO - Mostrar bola
    setTimeout(function () {
        pokemonImage.style.display = "block",
            openPokeball.style.display = "none"
    }, 1000);

    return await fetch(`${pokemonBase}/${randomPokemon}/`)
        .then((response) => response.json())
        .then((data) => {
            pokemonImage.src = data.sprites.front_default;
            name.innerText = data.name;
            pokemonImage.style.display = "none"
            openPokeball.style.display = "block"
        })
        .catch((error) => {
            console.error("Cannot get data", error);
        });

}

getData();

document.querySelector(".pokeball").addEventListener("click", getData);


if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(function () {
            console.log("Service Worker Registered");
        });
}