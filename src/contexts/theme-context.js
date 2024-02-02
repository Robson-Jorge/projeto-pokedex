import { createContext } from "react";
import useTheme from '../hooks/useTheme'
import Themes from "../themes/themes";

export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {

    const [ theme, setTheme ] = useTheme('theme', Themes.darkTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}