import { useEffect, useState, useContext} from "react";
import  Card  from "./card";
import styled from "styled-components";
import { getPokemon } from "../../services/pokemon";
import { ThemeContext } from "../../contexts/theme-context";

export default function UlCards({count, onFilterPoke}) {

    const {theme} = useContext(ThemeContext)

    const [poke, setPoke] = useState({
        data:[]
    })

    useEffect(() =>{
        (async () => {
            const pokemon = await getPokemon(count, onFilterPoke)
            setPoke({data: pokemon})
        })()
    },[count, onFilterPoke])

    return(
    <Ul>
        
        {poke.data?.length > 0 ? (
            poke.data.map((pokemon, key) => (
            <Card key={key} item={pokemon} />
        ))
        ) : !poke.data ? (
            <p className="err">Nenhum Pokémon corresponde à sua pesquisa</p>

        ) : (
            <Card item={poke.data} />       
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
        padding: 10px 15px;
        line-height: 26px;
        border-radius: 25px;
        background-color: #000;
        color: #fff;
    }
`