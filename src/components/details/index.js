import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

import Card from "./card"
import Info from "./info"
import IconOff from "../../image/icon-off"
import Toggle from "../header/toggleButton"
import Logo from "../header/logo"

export default function Details () {

    const {theme} = useContext(ThemeContext)

    const {name} = useParams()

    return(
        <Container color={theme.Color} background={theme.BackgroundModal}>
            <Logo/>
            <Toggle className='toggle'/>
            <Link to='/'>
                <IconOff/>
            </Link>  
            <Card pokemon={name}/>
            <Info pokemon={name}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 650px;
    background: url(${props => props.background}) no-repeat center / cover;
    background-color: #393939;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 25px;
    border-radius: 10px;
    gap: 50px;

    .toggle{
        position: absolute;
        right: -30%;
        top: -20px;
    }

    &>a:first-child{
        width: max-content;
        position: absolute;
        top: -40px;
        left: -30%;
    }
    &>a{
        position: absolute;
        top: 10px;
        right: 15px;
    }
    svg{
        fill: ${props=> props.color};
    }

    @media (max-width: 1000px){
        &{
            flex-direction: column;
            height: min-content;
        }

        &>a:first-child{
            top: 0px;
        }

        & .toggle{
            top: 10px;
        }
    }

    @media (max-width: 480px){
        &{
            position: static;
            width: 100vw;
            height: 100vh;
            transform: none;
            border-radius: 0;
        }

        &>a:first-child{
            left: 50%;
            transform: translateX(-50%);
        }

        &>a{
            top: 15px;
            right: 18px;
        }

        & .toggle{
            top: 20px;
            left: 15px;
        }

        svg{
            font-size: 25px;
        }
    }
`