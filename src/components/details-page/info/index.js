import { useState } from "react";
import { useEffect } from "react";

import Themes from "../../../themes/themes";
import getPokemon from "../../../services/pokemon";
import getAbilityPokemon from "../../../services/abilities-pokemon";
import getMovesPokemon from "../../../services/moves";
import { InfoPoke, Ul } from "./style";

export default function Info({pokemon}) {

    const [details, setDetails] = useState()
    const [ability, setAbility] = useState()
    const [moves, setMoves] = useState()

    useEffect(() =>{
        const list = document.getElementById('menu')
        const listItems = list.childNodes

        listItems.forEach(item => {

            function remove() {
                listItems.forEach(item => {
                    const contain = item.classList.contains('active')

                    const href = item?.firstChild.getAttribute('href')
                    const targetElement = document.querySelector(href);

                    if (contain) {
                        item.classList.remove('active')
                    }  

                    if (targetElement) {
                        targetElement.style.display = 'none';
                    }
                });
            }

            item.addEventListener('click', () => {
                const contain = item.classList.contains('active')

                const href = item?.firstChild.getAttribute('href')
                const targetElement = document.querySelector(href);


                if (contain & targetElement.style.display === 'none') {
                    targetElement.style.display = 'none';
                    item.classList.remove('active')
                } else {
                    remove()
                    item.classList.add('active')
                    targetElement.style.display = 'flex';
                }
            })
        });

        (async () => {
            const data = await getPokemon(pokemon)
            setDetails(data)

            const ability = data.abilities
            const abilityPromisses = ability.map(async ability => await getAbilityPokemon(ability.ability.name))

            const abilityData = await Promise.all(abilityPromisses)
            setAbility(abilityData)

            const moves = data?.moves.slice(0,7)
            const movesPromisses = moves.map(async move => await getMovesPokemon(move.move.name))

            const moveData = await Promise.all(movesPromisses)
            setMoves(moveData)
        })()
    },[])

    const abilities = ability?.map((info, index) =>{

        const language = info.effect_entries.map((data) => data.language.name)

        if(language[1] === 'en'){
            return(
                <li key={index}>
                    <h2>{info.name}</h2>
                    <p>{info?.effect_entries[1].effect}</p>
                </li>
            )
        }else{
            return(
                <li key={index}>
                    <h2>{info.name}</h2>
                    <p>{info?.effect_entries[0].effect}</p>
                </li>
            )
        }
    })

    const status = details?.stats?.map((info, index) =>{
        return(
            <li key={index}>
                <h2>{info.stat.name}</h2>
                <span>{info.base_stat}</span>
            </li>
        )
    })

    const move = moves?.map((info, index) =>{
        return(
        <li key={index}>
            <h2>{info.name}</h2>
            <div className="info">
                <h2>{info.name}</h2>
                <ul>
                    <li>
                        <h3>Type</h3>
                        <p>{info.type.name}</p>
                    </li>

                    <li>
                        <h3>Category</h3>
                        <p>{info.damage_class.name}</p>
                    </li>

                    <li>
                        <h3>PP</h3>
                        <p>{info.pp}</p>
                    </li>

                    <li>
                        <h3>Power</h3>
                        <p>{info.power}</p>
                    </li>

                    <li>
                        <h3>Accuracy</h3>
                        <p>{info.accuracy}</p>
                    </li>
                </ul>
                <p>{info.effect_entries[0].effect}</p>
            </div>
        </li>
        )
    })

    return(

        <InfoPoke background={Themes.Default.BackgroundModalInfo}>
            <Ul id="menu" translate="no">
                <li className="active"><a href="#status">Status</a></li>
                <li><a href="#ability">Ability</a></li>
                <li><a href="#moves">Moves</a></li>
            </Ul> 

            <ul id="status" className="list">
                {status}
            </ul> 

            <ul id="ability" className="list">
                {abilities}
            </ul> 

            <ul id="moves" className="list">
                {move}
            </ul>          
        </InfoPoke>
    )
}