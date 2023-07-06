async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/6/')
    return await response.json()  
 }

async function getPokemonType() {
    const response = await getPokemon()
    const pokemonType = response.types.map(type=> type.type.name)
    return pokemonType
}
getPokemonType()

export {getPokemon, getPokemonType}