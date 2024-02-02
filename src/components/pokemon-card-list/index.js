import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getListPokemon } from "../../services/pokemonList"
import Card from "../pokemon-main-card"
import { PokemonList } from "./style"
import { usePokemonNameListWithIds } from "../../hooks/usePokemonListName"
import BounceLoader from "../bounce-loader"

export default function PokemonListContainer({ count, onFilterPoke }) {
  const { data: listName } = usePokemonNameListWithIds()

  const [poke, setPoke] = useState()
  const [fullListPokemons, setFullListPokemons] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const pokemon = await getListPokemon(count, onFilterPoke, listName)

      if (!pokemon) {
        setFullListPokemons([])
        setPoke([])
      } else {
        setFullListPokemons(pokemon.length ? pokemon : [])
        setPoke(pokemon.length ? [] : pokemon)
      }

      if (pokemon) {
        setIsLoading(false)
      }
    })()
  }, [count, onFilterPoke, listName])

  return (
    <PokemonList>
      {isLoading ? (
        <BounceLoader />
      ) : poke?.name ? (
        <li>
          <Link to={`/pokemon/${poke.name}`}>
            <Card item={poke} />
          </Link>
        </li>
      ) : fullListPokemons.length ? (
        fullListPokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <Card key={pokemon.id} item={pokemon} />
            </Link>
          </li>
        ))
      ) : (
        <p className="err">
          Sorry, we didn't find any Pokémon matching your search.
          <br />
          If necessary, use the "-" sign to separate words.
        </p>
      )}
    </PokemonList>
  )
}
