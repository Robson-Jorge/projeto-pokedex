import styled from "styled-components";
import Themes from "../themes/themes";
import { useContext } from "react";
import { ThemeContext } from '../../contexts/theme-context'

export default function Toggle () {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <ButtonContainer background={theme.ButtonContentLight} color={theme.Color}>
            <Button 
            onClick={() => {setTheme(theme === Themes.darkTheme ? Themes.lightTheme : Themes.darkTheme)}}
            background={theme.ButtonLight} transform={theme.ButtonAnim}
            />
           
        </ButtonContainer>      
    )
}

// Styled

const ButtonContainer = styled.div`
    width: 83px;
    height: 30px;
    border: 1px solid ${props => props.color};
    border-radius: 25px;
    background-color: ${props => props.background};
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s ease-in-out;
`

const Button = styled.button`
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 50%;
    background-color: ${props => props.background};
    margin: 0 3px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    transform: ${props => props.transform};
`