import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../contexts/theme-context"

import Detail from "../pages/details-page"
import PageMain from "../pages/page-main"

const AppRoutes = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <GlobalStyle backgroundTheme={theme} />
      <Routes>
        <Route exact path='/' element={<PageMain />} />
        <Route exact path='/pokemon/:name' element={<Detail />} />
      </Routes>
    </BrowserRouter>
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
    color: #000;
  }

  body{
    overflow-x: hidden;
    background-color: #282c34;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
  }

  #root{
    display: flex;
    flex-wrap: wrap;
    background-color: #282c34;
    background: url(${props => props.backgroundTheme.BackgroundMain}) no-repeat center / cover fixed;
    min-height: 100vh;
    width: 100vw;
    align-items: flex-start;
    justify-content: center;
    transition: 0.4s ease-in-out;
    font-size: calc(10px + 2vmin);
    padding-bottom: 20px;
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

 @media (max-width: 720px){
  #root{
    padding-bottom: 0;
  }
 }

 @media (max-width: 425px){
  #root{
    background: url(${props => props.backgroundTheme.BackgroundMainMobile}) no-repeat center / cover fixed;
  }
 }
`

export { AppRoutes }