import getAbilityPokemon from "./abilities-pokemon"
import getMovesPokemon from "./moves"
import getPokemon from "./pokemon"

export async function pokemonInfoByName(pokemon) {
  try {
    const data = await getPokemon(pokemon)

    const { stats, abilities, name, types, sprites, moves: moviesData } = data
    const pokemonData = {
      stats,
      abilities,
      name,
      types,
      sprites,
      moviesData,
    }

    const ability = await Promise.all(
      data?.abilities.map(
        async (ability) => await getAbilityPokemon(ability.ability.name)
      )
    )

    const movesPromises = await Promise.all(
      data?.moves.slice(0, 7).map(async (move) => await getMovesPokemon(move.move.name))
    )

    const move = movesPromises.map(
      ({ name, damage_class, pp, power, accuracy, effect_entries }) => {
        return { name, damage_class, pp, power, accuracy, effect_entries }
      }
    )

    const response = { move, ability, pokemonData }

    return response
  } catch (error) {
    console.error("Erro ao obter informações do Pokémon:", error)
    throw error
  }
}
