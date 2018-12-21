console.log("Javascript DOM");

const formPokemonName = document.getElementById("pokemon-guest") 

const submitPokemon = eventNow => {
    eventNow.preventDefault();

    const inputPokemonName = document.getElementById("pokemon-name").value

    const data = inputPokemonName

    displayToConsole(data)
}

const displayToConsole = data =>{
    console.log(data)
}

formPokemonName.addEventListener("submit", submitPokemon)