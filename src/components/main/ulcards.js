import { useEffect, useState} from "react";
import  Card  from "./card";
import styled from "styled-components";
import { getPokemon } from "../../services/pokemon";

export default function UlCards({count}) {

    const [poke, setPoke] = useState({
        data:[]
    })

    useEffect(() =>{
        (async () => {
            const pokemon = await getPokemon(count)
            setPoke({data: pokemon})
        })()
    },[count])

    return(
    <Ul>
        {
            poke.data.map((pokemon, key)=>{
                return(
                    <Card key={key} item={pokemon}/>
                )
            })
        }
    </Ul>
    )
}

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`