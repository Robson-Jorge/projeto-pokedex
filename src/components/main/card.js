import styled from "styled-components";
import Themes from "../themes/themes";
import { useContext } from "react";
import colorTypes from "../themes/types-list-colors";
import { ThemeContext } from "../../contexts/theme-context";

export default function Card ({item}) {

    const {theme} = useContext(ThemeContext)

    return(
        <CardContent color={theme.Color} background={theme.BackgroundCard}>
            <div>
                <p>{item?.name}</p>
            </div>
            <img src={item?.sprites?.other.dream_world.front_default} alt={item?.name}/>
            <ul>
                {
                    item?.types?.map((type, index) => {
                        return(
                            <li key={index} style={{background:colorTypes[type.type.name]}}>{type.type.name}</li>
                        )
                    })
                }
            </ul>
        </CardContent>
    )
}

//Style

const CardContent = styled.div`
 width: 216px;
 height: 280px;
 margin: 15px 30px;
 border-radius: 10px;
 box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
 background-color: ${props => props.background};
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 padding: 25px;
 transition: 0.2s ease;
 color: ${props => props.color};
 cursor: pointer;
 animation: scale 0.4s ease ;

 @keyframes scale {
    from{transform: scale(0);}
    to{transform: scale(1);}
 }

 &:hover{
    transform: scale(1.02);
    background: ${Themes.Default.BackgroundHover};
    color: #000;

}

 div{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
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
    max-width: 100%;
    height: 135px;
 }

 ul{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
 }

 li{
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    width: 72px;
    height: 25px;
    font-size: 16px;
    border-radius: 15px;
    font-family: 'Acme';
 }
`