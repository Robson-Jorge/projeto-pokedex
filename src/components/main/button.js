import styled from "styled-components";
import Themes from "../themes/themes";
import getPokemonResults from "../../services/results";

export default function LoadButton () {
    return(
        <>
            <Button onClick={()=> getPokemonResults()}>Carregar mais</Button>
        </>
    )
}

const Button = styled.button`
    width: 300px;
    height: 40px;
    background-color: ${Themes.Default.ColorLightPoke};
    border: 4px solid ${Themes.Default.ColorDarkPoke};
    border-radius: 25px;
    box-shadow: 0px 0px 14px 2px ${Themes.Default.ColorDarkPoke} inset;
    cursor: pointer;
    color: ${Themes.Default.ColorDarkPoke};
    font: bold 20px 'Gloock';
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover{
        transform: scale(1.02);
    }
    
` 