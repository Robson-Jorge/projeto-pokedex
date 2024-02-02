import getPokemon from "./pokemon";

export async function getListPokemon(loadMore, onFilterPoke, listName) {

  if (onFilterPoke?.length > 0) {
    const filteredList = listName.find(pokemon => pokemon.name === onFilterPoke || pokemon.id === onFilterPoke)
    if(filteredList){
      return await getPokemon(onFilterPoke)
    }
  } 
  else {   
    if(listName?.length > 0){
      const pokemonList = await Promise.all(
        listName.slice(0,loadMore).map(async data => {
        return await getPokemon(data.name)
      }))
      return pokemonList
    }  
  }
}