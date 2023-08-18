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

    @media (max-width: 720px) {
        &:first-child{
            width: 120px; 
            padding: 15px 0;     
        }
    }

    @media (max-width: 480px) {
        &:first-child{
            padding: 10px 0;
        }
    }
`