import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getPokemonListName() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    const dataByPokemonName = response.data.results.map((pokemon)=>{
        const partes = pokemon.url.split('/');  
        const id = partes[partes.length - 2];
        pokemon = {...pokemon, id}
        return pokemon
    })

    return dataByPokemonName
}

export function usePokemonNameListWithIds() {
    const query = useQuery({
        queryFn: getPokemonListName,
        queryKey: ['pokemonName'],
    })
    
    return query;
};