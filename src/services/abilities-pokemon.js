export default async function getAbilityPokemon(ability) {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`)
    const resolve = await response.json()
    return resolve
}