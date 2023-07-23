async function getPokemon(loadMore, onFilterPoke) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${loadMore}`)
    const results = await response.json()  

    if (onFilterPoke?.length > 0) { 
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${onFilterPoke}`);
            const result = await response.json();
    
            // Verifica se a resposta indica que o Pokémon não foi encontrado ou ocorreu um erro
            if (result?.detail) {
              console.error("Pokémon não encontrado:", result.detail);
              return null;
            }
    
            return result;
          } catch (error) {
            return null;
          }
    } else {
        const list = results.results.map(async name =>{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.name}`)
            return await response.json() 
        })
    
        return Promise.all(list)
    }



 }

export {getPokemon }