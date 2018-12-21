console.log("Javascript DOM");

const formPokemonName = document.getElementById("pokemon-guest") 
const outputPokemonName = document.getElementById("pokemon-output")

const submitPokemon = eventNow => {
    eventNow.preventDefault();

    const inputPokemonName = document.getElementById("pokemon-name").value

    const data = inputPokemonName

    displayToConsole(data)
}

const displayToConsole = data =>{
    console.log(data)
}

const displayToDocument = data => {
    const name = data 
    outputPokemonName.innerHTML += name
}

formPokemonName.addEventListener("submit", submitPokemon)