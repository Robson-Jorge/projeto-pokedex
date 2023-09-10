import { useState, useEffect } from "react"
import getListPokemon from "../../services/pokemonList"

import UlCards from "./ul-card"
import LoadButton from "./button"
import { MainContent } from "./style"

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