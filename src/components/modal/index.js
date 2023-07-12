import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import Card from "./card"
import Info from "./info"
import Icon from "../../image/icon-off"

export default function Modal () {

    const {theme} = useContext(ThemeContext)

    return(
        <Container color={theme.Color} background={theme.BackgroundModal}>
            <Icon/>
            <Card/>
            <Info/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 970px;
    height: 700px;
    background: url(${props => props.background}) no-repeat center / cover;
    background-color: #393939;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 25px;
    border-radius: 10px;

    &>a{
        position: absolute;
        top: 10px;
        right: 15px;
    }
    svg{
        fill: ${props=> props.color};
    }
`