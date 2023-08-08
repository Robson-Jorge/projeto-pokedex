import getPokemon from "./pokemon";

export default async function getListPokemon(loadMore, onFilterPoke) {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${loadMore}`)
  const results = await response.json()

  if (onFilterPoke?.length > 0) {
    try {
      return await getPokemon(onFilterPoke)

    } catch (error) {
      return null;
    }
  } else {
    const list = results.results.map(async name => {
      return await getPokemon(name.name)
    })

    return Promise.all(list)
  }
}