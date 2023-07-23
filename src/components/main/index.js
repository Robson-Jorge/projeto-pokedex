import styled from "styled-components"
import UlCards from "./ulcards"
import LoadButton from "./button"
import { useState, useEffect } from "react"
import { getPokemon } from "../../services/pokemon"

export default function Main ({filterPoke}) {

    const [loadMore, setLoadMore] = useState(10)

    useEffect(()=>{
        (async ()=> {
            await getPokemon(loadMore)
        })()
    },[loadMore])

    const handleLoadMoreClick = () => {
        setLoadMore(loadMore + 10);
    };

    return (
        <>
        <MainContent>
        <UlCards count={loadMore} onFilterPoke={filterPoke}/>
        </MainContent>
        <LoadButton  onClick={handleLoadMoreClick}/>
        </>
    )
}

const MainContent = styled.main`
    margin-top: 90px;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 40px;
    margin-bottom: 20px;
`