import Header from "./components/header/"
import { createGlobalStyle } from 'styled-components'
import FundoLight from './image/pokemon-dia.jpg'
import TypePoke from "./objects/typesList";
import { ThemeContext, ThemeProvider } from './contexts/theme-context';
import { useContext } from "react";



function App() {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <ThemeProvider>
        <GlobalStyle GlobalStyle={{background:FundoLight}}/>
        <Header/>
        <TypePoke />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle` 
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  #root{
    display: flex;
    background-color: #282c34;
    background: url(${FundoLight}) no-repeat center/cover;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #f1e9e9;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #582965;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`

export default App;
