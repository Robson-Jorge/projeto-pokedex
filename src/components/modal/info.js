import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";
import Themes from "../themes/themes";

export default function Info() {

    return(

        <InfoPoke background={Themes.Default.BackgroundModalInfo}>
            <Ul>
                <li><a href="#">Status</a></li>
                <li><a href="#">Ability</a></li>
                <li><a href="#">Moves</a></li>
            </Ul>
            
        </InfoPoke>
    )
}

function Data() {
    return(
        <>
        
        </>
    )
}

const InfoPoke = styled.div`
    width: 55%;
    height: 85%;
    border-radius: 8px;
    background: url(${props => props.background}) no-repeat center / cover;
    position: relative;
    margin-bottom: 20px;
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