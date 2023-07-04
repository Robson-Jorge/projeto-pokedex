import styled from "styled-components"
import Logo from "../header/logo"
import Toggle from "../header/toggleButton"
import SearchBar from "./searchbar"
import MenuHamburguer from "./menuType"

export default function Header () {
    return (
        <HeaderContainer>
            <Logo />
            <SearchBar />
            <MenuHamburguer/>
            <Toggle/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    margin: 25px 30px;
    justify-content: space-between;
    align-items: center;
`