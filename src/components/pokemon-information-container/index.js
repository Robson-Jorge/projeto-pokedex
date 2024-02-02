import { useEffect, useState } from "react";
import { InfoPoke } from "./style";
import { pokemonInfoByName } from "../../services/PokemonsInfoByName";
import { PokemonStatus, PokemonAbilities, PokemonMoves } from "./components";
import BounceLoader from "../bounce-loader";
import { useNavigate } from "react-router";

export default function Info({pokemon}) {

    const [movePoke, setMovePoke] = useState()
    const [abilityPoke ,setAbilityPoke] = useState()
    const [statusPoke, setStatusPoke] = useState()
    const navigate = useNavigate()

    const [show, setShow] = useState("status")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        (async () => {
            try{
                const {move,  ability ,  pokemonData } = await pokemonInfoByName(pokemon);
            
                setMovePoke(move);
                setAbilityPoke(ability);
                setStatusPoke(pokemonData.stats);
                setIsLoading(false);
            }catch(error){
                console.log(error)
                navigate("../404")
            }
        })();
    },[])

    return(
        <InfoPoke>
            <nav id="menu" translate="no">
                <li className={show === "status" ? "active" : undefined}>
                    <button onClick={()=> setShow("status")}>Status</button>
                </li>

                <li className={show === "abilities" ? "active" : undefined}>
                    <button onClick={()=> setShow("abilities")}>Ability</button>
                </li>

                <li className={show === "moves" ? "active" : undefined}>
                    <button onClick={()=> setShow("moves")}>Moves</button>
                </li>
            </nav> 

            {isLoading && <BounceLoader />}

            {show === "status" && !isLoading && <PokemonStatus status={statusPoke} />}
            {show === "abilities" && !isLoading && <PokemonAbilities ability={abilityPoke} />}
            {show === "moves" && !isLoading && <PokemonMoves moves={movePoke} />}
        </InfoPoke>
    )
}