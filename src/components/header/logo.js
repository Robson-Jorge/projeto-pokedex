import styled from "styled-components"
import ImageLogo from "../../image/pokemonLogo.png"

export default function Logo () {

    return (
        <>
            <Image src={ImageLogo} alt='Logo Pokemon'/>
        </>
    )
}

const Image = styled.img`
    width: 150px;
    height: fit-content;
`