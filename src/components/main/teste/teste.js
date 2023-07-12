import { useEffect, useState} from "react";
import  Card  from "../card";
import getPokemonResults from "../../../services/results";
import styled from "styled-components";

export default function UlTesteCards() {

    const [state,setState] = useState()

    useEffect(() =>{

        (async () => {
            const data = await getPokemonResults()
            setState(data)
        })()
      },[])
    
    const cartao = state?.map(() => (   
        <Card/>
    ));

    return(
    <Ul>
        {cartao}
    </Ul>
    )
}

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`