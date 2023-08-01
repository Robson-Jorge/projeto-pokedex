export default async function getMovesPokemon(move) {
    const response = await fetch(`https://pokeapi.co/api/v2/move/${move}`)
    const resolve = await response.json()
    return resolve
}