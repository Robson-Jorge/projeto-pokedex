import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import Card from "./card"
import Info from "./info"
import IconOff from "../../image/icon-off"
import { Link, useParams } from "react-router-dom"

export default function Details () {

    const {theme} = useContext(ThemeContext)

    const {name} = useParams()

    return(
        <Container color={theme.Color} background={theme.BackgroundModal}>
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
    min-height: 650px;
    background: url(${props => props.background}) no-repeat center / cover;
    background-color: #393939;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 25px;
    border-radius: 10px;
    gap: 50px;

    &>a{
        position: absolute;
        top: 10px;
        right: 15px;
    }
    svg{
        fill: ${props=> props.color};
    }
`