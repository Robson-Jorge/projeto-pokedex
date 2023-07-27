import { Link } from "react-router-dom"
import styled from "styled-components"

import ImageLogo from "../../image/pokemonLogo.png"

export default function Logo () {
    return (
        <a href='/'>
            <Image src={ImageLogo} alt='Logo Pokemon'/>
        </a>
    )
}

const Image = styled.img`
    width: 150px;
    height: fit-content;
`