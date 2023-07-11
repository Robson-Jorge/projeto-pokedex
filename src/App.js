import Header from "./components/header/"
import Main from "./components/main";
import { createGlobalStyle } from 'styled-components'
import { ThemeContext, ThemeProvider } from './contexts/theme-context';
import { useContext } from "react";
import GoogleFontLoader from 'react-google-font-loader'

function App() {
  return (
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
  );
}

function AppContent () {
  const {theme} = useContext(ThemeContext);

  return (
    <>      
      <GoogleFontLoader
        fonts={[
          {
            font: 'Acme',
            weights: [400, '400i'],
          },
          {
            font: 'Roboto',
            weights: [400, '400i'],
          },
          {
            font: 'Gloock',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <GlobalStyle backgroundTheme={theme.Background}/>
      <Header/>
      <Main/>
    </>
  )

}

const GlobalStyle = createGlobalStyle` 
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  body{
    overflow-x: hidden;
    background-color: #282c34;
    font-family: 'Roboto', sans-serif;
  }

  #root{
    display: flex;
    flex-wrap: wrap;
    background-color: #282c34;
    background: url(${props => props.backgroundTheme}) no-repeat center / cover;
    min-height: 100vh;
    width: 100vw;
    align-items: flex-start;
    justify-content: center;
    transition: 0.4s ease-in-out;
    font-size: calc(10px + 2vmin);
    padding-bottom: 20px;
    min-height: 100vh;
  }
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #c8c8c8;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #3B5BA7;
    border-radius: 10px;
    border: 3px solid #e8e8e8;
  }

  @font-face {
    font-family: PokemonClassic;
    src: url('./fonts/PokemonClassic.ttf');
 }
`

export default App;
