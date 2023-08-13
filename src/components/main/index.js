import { useState, useEffect } from "react"
import styled from "styled-components"
import getListPokemon from "../../services/pokemonList"

import UlCards from "./ulcards"
import LoadButton from "./button"

export default function Main ({filterPoke}) {

    const [loadMore, setLoadMore] = useState(10)

    useEffect(()=>{
        (async ()=> {
            await getListPokemon(loadMore)
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

    @media (max-width: 720px) {
        &{
            margin-top: 150px;
        }
    }

    @media (max-width: 480px) {
        &{
            margin-top: 135px;
        }
    }
`