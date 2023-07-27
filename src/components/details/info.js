import styled from "styled-components";
import Themes from "../../themes/themes";
import { useState } from "react";
import { useEffect } from "react";
import { getPokemon } from "../../services/pokemon";

export default function Info({pokemon}) {

    const [details, setDetails] = useState()

    useEffect(() =>{

        (async () => {
            const data = await getPokemon(pokemon)
            setDetails(data)
        })()
    },[])

    const status = details?.stats?.map((info, index) =>{
        return(
        <li key={index}>
            <span>{info.stat.name}</span>
            <span>{info.base_stat}</span>
        </li>
        )
    })

    return(

        <InfoPoke background={Themes.Default.BackgroundModalInfo}>
            <Ul>
                <li><a href="#">Status</a></li>
                <li><a href="#">Ability</a></li>
                <li><a href="#">Moves</a></li>
            </Ul> 
            <ul id="status">
                {status}
            </ul>          
        </InfoPoke>
    )
}

const InfoPoke = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 520px;
    border-radius: 8px;
    background: url(${props => props.background}) no-repeat center / cover;
    position: relative;
    margin-bottom: 20px;
    #status{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    #status li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 295px;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(90deg, #CC0032 65%, #000 67%, #FFF 69%), rgba(255, 255, 255, 0.50);
    }
    li span:first-child{
        width: 70%;
        display: flex;
        justify-content: center;
    }
    li span:last-child{
        width: 30%;
        display: flex;
        justify-content: center;
    }
`

const Ul = styled.ul`
    display: flex;
    position: absolute;
    left: 50%;
    top: -25px;
    transform: translateX(-50%);
    li{
        background-color: ${Themes.Default.ColorLightPoke};
        margin: 0 30px;
        border-radius: 10px 10px 0px 0px;
        font-size: 18px;
        line-height: 20px;
        padding: 4px 20px;
    }

    li:hover{
        background-color: ${Themes.Default.ColorDarkPoke};
        color: #fff;
    }

    a{
        color: inherit;
    }
`