export default async function getListPokemon(loadMore) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${loadMore}`)
    const results = await response.json()  
    const teste = results.results.map(name => name.name)

    return teste
}