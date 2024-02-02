import { useState, useEffect } from "react"

import Logo from "../pokemon logo"
import Toggle from "../toggler-button"
import { SearchBar } from "../search-bar"
import { HeaderContainer } from "./style"

export default function Header({ setValue }) {
  const [scrolled, setScrolled] = useState(false)

  function handleScroll() {
    const scrollThreshold = 40
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    if (scrollTop > scrollThreshold && !scrolled) {
      setScrolled(true)
    } else if (scrollTop <= scrollThreshold && scrolled) {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo />
      <SearchBar onValueChange={setValue} />
      <Toggle />
    </HeaderContainer>
  )
}
