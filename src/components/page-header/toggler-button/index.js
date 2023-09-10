import { useContext } from "react";

import Themes from "../../../themes/themes";
import { ThemeContext } from '../../../contexts/theme-context'
import { ButtonContainer, Button } from "./style";

export default function Toggle ({className}) {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <ButtonContainer className={className} background={theme.ButtonTogglerContent} color={theme.Color}>
            <Button 
                onClick={() => {setTheme(theme.Title === 'Dark' ? Themes.lightTheme : Themes.darkTheme)}}
                background={theme.ButtonToggler} 
                transform={theme.ButtonAnim}
            />    
        </ButtonContainer>      
    )
}