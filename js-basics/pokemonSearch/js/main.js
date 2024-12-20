

async function fetchData() {
    const pokemonName =document.getElementById("pokemonName").value.toLowerCase();

    const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok)
    {
        throw new Error("Could not fetch data");
    }
    const data=await response.json();
    const pokemonImg =data.sprites.front_default;
    const img = document.querySelector("img");

    img.src = pokemonImg;
    img.style.display = "block";
}