import { useState, useEffect, useContext } from "react";
import getPokemon from '../../../services/pokemon'

import colorTypes from "../../../themes/types-list-colors";
import { ThemeContext } from "../../../contexts/theme-context";
import { CardContent } from "./style";

export default function Card({ pokemon }) {
    const [poke, setPoke] = useState()

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        (async () => {
            const data = await getPokemon(pokemon)
            setPoke(data)
        })()
    }, [])

    return (
        <CardContent color={theme.Color} background={theme.BackgroundCard}>
            <div>
                <p>{poke?.name}</p>
            </div>
            <img src={poke?.sprites?.other.dream_world.front_default} alt={poke?.name} />
            <ul>
                {
                    poke?.types?.map((type, index) => {
                        return (
                            <li key={index} style={{ background: colorTypes[type.type.name] }}>
                                {type.type.name}
                            </li>
                        )
                    })
                }
            </ul>
        </CardContent>
    )
}