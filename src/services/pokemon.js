async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/6/')
    return await response.json()  
 }

 export default getPokemon