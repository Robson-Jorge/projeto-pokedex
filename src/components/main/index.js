import styled from "styled-components"
import { Card, UlCards } from "./card"
import LoadButton from "./button"

export default function Main () {
    return (
        <>
        <MainContent>
            {/* <Card/> */}
            <UlCards/>
        </MainContent>
        <LoadButton/>
        </>
    )
}

const MainContent = styled.main`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 40px;
    margin-bottom: 20px;
`