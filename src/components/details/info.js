import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

import Themes from "../../themes/themes";
import getPokemon from "../../services/pokemon";
import getAbilityPokemon from "../../services/abilities-pokemon";
import getMovesPokemon from "../../services/moves";

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
            <Ul id="menu">
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

const InfoPoke = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 520px;
    border-radius: 8px;
    background: url(${props => props.background}) no-repeat center / cover;
    position: relative;
    margin-bottom: 20px;

    #status{
        display: flex;
        width: 70%;
        flex-direction: column;
        gap: 15px;
    }
    #status li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(90deg, #CC0032 65%, #000 67%, #FFF 69%), rgba(255, 255, 255, 0.50);
    }
    #status li h2{
        width: 70%;
        display: flex;
        justify-content: center;
        color: #fff;
        text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;
        font-size: inherit;
        line-height: 40px;
        font-weight: 500;
        text-transform: capitalize;
    }
    #status li span{
        width: 30%;
        display: flex;
        font-size: inherit;
        justify-content: center;
    }

    #ability{
        height: 90%;
        flex-direction: column;
        text-align: center;
        padding: 0 25px;
        color: #fff;
        gap: 20px;
        overflow-y: auto;
    }

    #ability h2{
        color: ${Themes.Default.ColorLightPoke};
        font-size: 22px;
        margin-bottom: 10px;
        text-transform: capitalize;
    }

    #ability p{
        font-size: 18px;
    }

    #moves{
        display: none;
        flex-direction: column;
        width: 70%;
        gap: 15px;
        color: #fff;
    }

    #moves li{
        position: relative;
        cursor: pointer;
        text-align: center;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(90deg, #CC0032 65%, #000 67%, #FFF 69%), rgba(255, 255, 255, 0.50);
    }

    #moves li h2{
        text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;
        text-align: center;
        font-size: 20px;
        line-height: 40px;
        font-weight: 500;
        text-transform: capitalize;
    }

    .info{
        display: none;
        flex-direction: column;
        width: 280px;
        height: 290px;
        background: #BDC0CA;
        position: absolute;
        z-index: 2;
        border-radius: 5px;
        right: -50%;
        top: -150px;
        justify-content: space-between;
        gap: 10px;
        overflow-y: auto;
        padding: 20px 10px;
    }

    #moves .info ul {
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: 8px;
    }

    #moves .info ul li{
        display: flex;
        border-radius: 3px;
        border: 1px solid #000;
        background: linear-gradient(90deg, #FFCB05 47.92%, #000 50%, #3B5BA7 52.60%);
        width: 80%;
        height: 30px;
        justify-content: space-between;
        align-items: center;
    }

    #moves .info ul li h3{
        width: 50%;
        font-size: 14px;
        color: #000;
        text-transform: capitalize;
    }

    #moves .info ul li p{
        width: 50%;
        font-size: 14px;
        color: #fff;
    }

    #moves .info h2{
        line-height: 25px;
    }

    #moves .info p{
        font-size: 14px;
        color: ${Themes.Default.ColorLightPoke};
        text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;
    }

    #moves li:hover .info{
        display: flex;
    }

    .list{
        display: none;
    }

    @media (max-width: 1440px){
        .info{
            right: -90%;
        }
    }

    @media (max-width: 1200px){
        &{
            width: 80%;
            height: 480px;
            align-self: center;
        }

        #status{
            width: 80%;
        }

        #status li{
            font-size: 16px;
        }

        #moves{
            width: 80%;
        }

        #moves li h2{
            font-size: 16px;
        }

        .info{
            right: -75%;
        }

        #ability h1{
        font-size: 18px;
        }

        #ability p{
            font-size: 16px;
        }
    }

    @media (max-width: 480px){
        #moves{
            gap: 5px;
        }

        .info{
            width: 220px;
            height: 230px;
            top: -220px;
            right: -30%;
        }
    }

    @media (max-height: 830px) and (max-width: 480px){
        &{
            height: 380px;
        }

        #moves li{
            height: 35px;
        }

        #status{
            gap: 5px;
        }
    }
`

const Ul = styled.ul`
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: space-around;
    left: 50%;
    top: -25px;
    transform: translateX(-50%);
    li{
        background-color: ${Themes.Default.ColorLightPoke};
        border-radius: 10px 10px 0px 0px;
        font-size: 18px;
        line-height: 20px;
        padding: 4px 20px;
    }

    li:hover{
        background-color: ${Themes.Default.ColorDarkPoke};
        color: #fff;
        cursor: pointer;
    }

    a{
        color: inherit;
    }

    .active{
        background-color: ${Themes.Default.ColorDarkPoke};
        color: #fff; 
    }

    @media (max-width: 480px){
        li{
            padding: 4px 18px;
            font-size: 16px;
        }
    }
`