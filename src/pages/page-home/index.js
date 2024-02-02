import { useState } from "react"

import PokemonListContainer from "../../components/pokemon-card-list"
import LoadButton from "../../components/button-show-more"
import { MainContent } from "./style"
import Header from "../../components/main page header"

export default function PageHome () {

    const [ valueSearch, setValueSearch] = useState("")
    const [loadMore, setLoadMore] = useState(10)

    const handleLoadMoreClick = () => {
        setLoadMore(state => state + 10);
    };

    return (
        <>
            <Header setValue={setValueSearch}/>
            <MainContent>
                <PokemonListContainer count={loadMore} onFilterPoke={valueSearch}/>
            </MainContent>
            <LoadButton onFilterPoke={valueSearch} onClick={handleLoadMoreClick}/>
        </>
    )
}