import { ContainerAbility } from "./style"

export function PokemonAbilities({ability}) {

    return (
        <ContainerAbility>
            {ability?.map((info, index) => {
                return(
                    <li key={index}>
                        <h2>{info?.name}</h2>
                        <p>{info?.effect_entries.find((data) => data.language.name === "en")?.effect ?? "❓Sorry, no details found for this skill❓"}</p>
                    </li>
                )
            })}
        </ContainerAbility>
    )
};