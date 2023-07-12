export default async function getPokemonResults() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
    const results = await response.json()  
    // console.log(results);
    const teste = results.results.map(name => name.name)
    // console.log(teste);
    return teste
}

// useEffect(() =>{

//     (async () => {
//         const teste = await getPokemonResults()
//         console.log(teste);
//     })()
//   },[])