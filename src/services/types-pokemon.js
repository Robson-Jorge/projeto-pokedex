export default async function getTypePokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/type/')
    const resolve = response.json()  
    return resolve
 }
