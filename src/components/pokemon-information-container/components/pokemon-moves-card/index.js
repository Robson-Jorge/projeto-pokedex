import { ContainerMove } from "./style"
import NoMoves from "../../../../assets/image/no-moves.svg"

export function PokemonMoves({moves}) {

    return (
        <ContainerMove>
            {moves?.length === 0 ?
            <figure>
                <img src={NoMoves} alt="no-moves"/>
                <figcaption>No moves</figcaption>  
            </figure> : 
            moves?.map((info, index) => {
                return(
                    <li key={index}>
                        <h2>{info.name}</h2>
                        <div className="info">
                            <h2>{info.name}</h2>
                            <ul>
                                <li>
                                    <h3>Type</h3>
                                    <p>{info.name}</p>
                                </li>
                    
                                <li>
                                    <h3>Category</h3>
                                    <p>{info.damage_class.name}</p>
                                </li>
                    
                                <li>
                                    <h3>PP</h3>
                                    <p>{info.pp || 0}</p>
                                </li>
                    
                                <li>
                                    <h3>Power</h3>
                                    <p>{info.power || 0}</p>
                                </li>
                
                                <li>
                                    <h3>Accuracy</h3>
                                    <p>{info.accuracy || 0}</p>
                                </li>
                            </ul>
                            <p>{info.effect_entries[0]?.effect}</p>
                        </div>
                    </li>
                )
            })}
        </ContainerMove>
    )
};







