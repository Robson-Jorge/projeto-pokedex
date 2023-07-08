import styled from "styled-components"
import Logo from "../header/logo"
import Toggle from "../header/toggleButton"
import SearchBar from "./search-bar"
import MenuHamburguer from "./menu-Type"

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
    width: 100vw;
    margin: 15px 30px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`