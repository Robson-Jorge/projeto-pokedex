import { createContext } from "react";
import useTheme from '../hooks/useTheme'
import Themes from "../components/themes/themes";

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useTheme('theme', Themes.lightTheme)

    // console.log(theme);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}