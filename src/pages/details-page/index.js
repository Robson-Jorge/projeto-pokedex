import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-context"

import Card from "../../components/pokemon-information-card"
import Info from "../../components/pokemon-information-container"
import IconOff from "../../components/icons/icon-off"
import Toggle from "../../components/toggler-button"
import Logo from "../../components/pokemon logo"
import { Container } from "./style"

export default function Details () {

    const {theme} = useContext(ThemeContext)

    const {nameOrId} = useParams()

    return(
        <Container color={theme.Color} background={theme.BackgroundModal}>
            <Logo/>
            <Toggle className='toggle'/>
            <Link to='/' aria-label="Página inicial">
                <IconOff/>
            </Link>  
            <Card pokemon={nameOrId}/>
            <Info pokemon={nameOrId}/>
        </Container>
    )
}