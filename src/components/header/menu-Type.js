import styled, { ThemeContext } from "styled-components"
import colorTypes from "../themes/types-list-colors"
import getTypePokemon from "../../services/types-pokemon"
import { useContext, useEffect, useState } from "react"
import Themes from "../themes/themes"


export default function MenuHamburguer () {

    // const {theme, setTheme} = useContext(ThemeContext);

    // console.log(theme);


    const [poke, setPoke] = useState([])
    useEffect(() =>{

        (async () => {
          const data = await getTypePokemon()
          const result = data.results.map(type => type.name)
          setPoke(result)
        })()
      },[])

    const typePokemon = poke.map((type, index) => (
        
        <li key={index}><a href="#" style={{background:colorTypes[type]}}>{type}</a></li>
    ));

    return (
        <>
            <Nav>
                <input type="checkbox" id="menu-hamburguer" />
                
                <label htmlFor="menu-hamburguer">
                
                    <Div>
                        <p>Types</p>
                        <span></span>
                    </Div>
                </label>

                <Ul>
                    {typePokemon}
                </Ul>
            </Nav>
        </>
    )
}

//Styled

const Nav = styled.nav` 
    position: relative;

    input{
        display: none;
    }
    input:checked ~ ul{
        display: block;
    }
    input:checked ~ label span{
        transform: rotate(45deg);
    }
    input:checked ~ label span:before{
        transform: rotate(90deg);
        top: 0;
    }
    input:checked ~ label span:after{
        transform: rotate(90deg);
        bottom: 0;
    }
    label{
        display: flex;
        align-items: center;
        padding-left: 10px;
        cursor: pointer;
        color: #000;
        font-size: 18px;
        width: 195px;
        height: 35px;
    }
`

const Ul = styled.ul`
    list-style: none;
    display: none;
    position: absolute;
    width: 180px;
    height: 240px;
    border-radius: 0 0 7px 7px;
    left: 12px;
    background-color: ${Themes.Default.BackgroundColorPrimary};
    border: 1px solid #000;
    overflow: auto;
    padding-bottom: 8px;
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 30px;
        margin-top: 8px;
        border-radius: 4px;
        text-decoration: none;
        font-size: 18px;
        color: #000;
        line-height: 22px;
        transition: 0.2s ease-in-out;
        box-shadow: 0 2px 10px ${Themes.lightTheme.BoxShadowLight};
    }
    a:hover{
        transform: scale(1.02);
    }
`

const Div = styled.div`
    display: flex;
    padding: 8px;
    width: 195px;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #000;
    background-color: ${Themes.Default.BackgroundColorPrimary};

    p{
        font-size: 18px;
        align-self: center;
        line-height: 20px;
    }
    span{
        background-color: #000;
        position: relative;
        display: block;
        width: 30px;
        height: 2px;
        top: 50%;
        transform: translateY(-50%);
        left: 95px;
        transition: 0.5s ease-in-out;
    }
    span:after,
    span:before{
        background-color: #000;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.3s ease-in-out;
    }
    span:before{
        top: -8px;
    }
    span:after{
        bottom: -8px;
    }
`