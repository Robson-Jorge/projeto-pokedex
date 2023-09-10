import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-context"

import Card from "./card"
import Info from "./info"
import IconOff from "../../assets/svg/icon-off"
import Toggle from "../page-header/toggler-button"
import Logo from "../page-header/logo"
import { Container } from "./style"

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