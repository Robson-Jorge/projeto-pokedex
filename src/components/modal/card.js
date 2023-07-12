import styled from "styled-components";
import Themes from "../themes/themes";
import { useState, useEffect, useContext } from "react";
import colorTypes from "../themes/types-list-colors";
import { getPokemon } from '../../services/pokemon'
import { ThemeContext } from "../../contexts/theme-context";
import getPokemonResults from "../../services/results";

export default function Card() {
    const [poke, setPoke] = useState({
        namePoke : '',
        typeName : []
    })
    const [ pokeImage, setPokeImage] = useState()

    const {theme} = useContext(ThemeContext)

    useEffect(() =>{

        (async () => {
            const teste = await getPokemonResults()
            const data = await getPokemon(teste)
            const dataImg = data.sprites.other.dream_world.front_default;
            const pokeName = data.name  
            const result = data.types.map(type => type.type.name)
            setPokeImage(dataImg)
            setPoke(prevState => ({...prevState, typeName : [result], namePoke : pokeName}))
        })()
    },[])


    const typePokemon = poke.typeName[0]?.map((type, index) => (
        
        <li key={index} style={{background:colorTypes[type]}}>{type}</li>
    ));

    return(
        <CardContent color={theme.Color} background={theme.BackgroundCard}>
            <div>
                <p>{poke.namePoke}</p>
            </div>
            <img src={pokeImage} alt={poke.namePoke}/>
            <ul>
                {typePokemon}
            </ul>
        </CardContent>
    )
}

const CardContent = styled.div`
 width: 40%;
 height: 100%;
 border-radius: 10px;
 box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
 /* background-color: ${props => props.background}; */
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 padding: 25px;
 transition: 0.3s ease-in-out;
 color: ${props => props.color};

 div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 50px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid;
    font-size: 18px;
    line-height: 20px;
    text-transform: capitalize;
    font-family: 'Gloock';
    font-weight: 700;
    letter-spacing: 4px;
 }

 img{
    height: 300px;
 }

 ul{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 45px;
 }

 li{
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    width: 92px;
    height: 35px;
    font-size: 20px;
    border-radius: 20px;
    font-family: 'Acme';
 }
`