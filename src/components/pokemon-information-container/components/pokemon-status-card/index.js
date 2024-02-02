import { ContainerStatus } from "./style"

export function PokemonStatus({ status}) {

    return (
        <ContainerStatus>
            {status?.map((info, index) =>{
                return(
                    <li key={index}>
                        <h2>{info.stat.name}</h2>
                        <span>{info.base_stat}</span>
                    </li>
                )
            })}
        </ContainerStatus>
    )
};
