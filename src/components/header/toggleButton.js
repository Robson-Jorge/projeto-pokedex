import styled, { keyframes } from "styled-components";
import Themes from "../themes/themes";
import { useContext } from "react";
import { ThemeContext } from '../../contexts/theme-context'

export default function Toggle () {

    const {theme, setTheme} = useContext(ThemeContext);

    console.log(theme.ButtonAnim);

    return (
        <ButtonContainer style={{background: theme.ButtonContentLight}}>
            <Button 
            onClick={() => {setTheme(theme === Themes.darkTheme ? Themes.lightTheme : Themes.darkTheme)}}
            style={{background: theme.ButtonLight, transform:theme.ButtonAnim}}
            />
           
        </ButtonContainer>      
    )
}

// Styled

const ButtonContainer = styled.div`
    width: 83px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 25px;
    background-color: ${props => props.background};
    display: flex;
    /* justify-content: flex-start; */
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
    /* animation: Animate 0.6s infinite alternate; */
    @keyframes Animate {
        from{
            transform: translateX(0px);
        }
        to{
            transform: translateX(52px);
        }
    }
`