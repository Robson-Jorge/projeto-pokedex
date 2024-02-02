import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import NoImage from "../../assets/image/no-image.svg"

import colorTypes from "../../themes/types-list-colors";
import { CardContent } from "./style";

export default function Card ({item}) {

    const {theme} = useContext(ThemeContext)

    return(
        <CardContent color={theme.Color} background={theme.BackgroundCard}>
            <div>
                <p>{item?.name}</p>
            </div>
            <img src={
                item?.sprites?.other.dream_world.front_default || 
                item?.sprites?.other.home.front_default || 
                item?.sprites?.other["official-artwork"].front_default || 
                (item ? `https://img.pokemondb.net/sprites/home/normal/${item.name}.png` : null)  
            } alt={item?.name}
            onError={(e) => {
                // Tratar o erro, por exemplo, substituir a imagem por uma padrão
                e.target.src = NoImage;
            }}/>
            <ul>
                {
                    item?.types?.map((type, index) => {
                        return(
                            <li key={index} style={{background:colorTypes[type.type.name]}}>
                                {type.type.name}
                            </li>
                        )
                    })
                }
            </ul>
        </CardContent>
    )
}