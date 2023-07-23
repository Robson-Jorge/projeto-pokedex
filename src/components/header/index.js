import styled from "styled-components"
import Logo from "../header/logo"
import Toggle from "../header/toggleButton"
import SearchBar from "./search-bar"
import MenuHamburguer from "./menu-Type"
import { useState, useEffect } from "react"


export default function Header ({setValue}) {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 40;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollTop > scrollThreshold && !scrolled) {
      setScrolled(true);
    } else if (scrollTop <= scrollThreshold && scrolled) {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
    
  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo />
      <SearchBar onValueChange={handleValueChange}/>
      <MenuHamburguer/>
      <Toggle/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    display: flex;
    width: 100vw;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    flex-wrap: wrap;
    background-color: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 33, 0.9)' : 'transparent')};
`