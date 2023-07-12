async function getPokemon(teste) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/78`)
    return await response.json()  
 }

async function getPokemonImage(teste) {      
    const response = await getPokemon(teste)
    console.log(response);
    return response.sprites.other.dream_world.front_default;
}

export {getPokemon, getPokemonImage }