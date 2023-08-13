import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

import getListPokemon from "../../services/pokemonList";
import  Card  from "./card";

export default function UlCards({count, onFilterPoke}) {

    const [poke, setPoke] = useState({
        data:[]
    })

    useEffect(() =>{
        (async () => {
            const pokemon = await getListPokemon(count, onFilterPoke)
            setPoke({data: pokemon})
        })()
    },[count, onFilterPoke])

    return(
        <Ul>      
            {poke.data?.length > 0 ? (
                poke.data.map((pokemon, key) => (
                    <Link key={key} to={`/pokemon/${pokemon.name}`}>
                        <Card key={key} item={pokemon} />
                    </Link>
            ))
            ) : !poke.data ? (
                <p className="err">  Desculpe, não encontramos nenhum Pokémon correspondente à sua pesquisa.<br/>
                Certifique-se de digitar o nome do Pokémon em letras minúsculas e sem espaços.<br/>
                Se necessário, use o sinal "-" para separar as palavras.</p>

            ) : (
                <Link to={`/pokemon/${poke.data.name}`}>
                    <Card item={poke.data} />       
                </Link>
            )}    
        </Ul>
    )
}

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 500px;
    align-items: center;
    text-align: center;
    font: 22px 'Gloock';
    
    .err{
        max-width: 600px;
        padding: 10px 15px;
        line-height: 26px;
        border-radius: 25px;
        background-color: #000;
        color: #fff;
    }
`