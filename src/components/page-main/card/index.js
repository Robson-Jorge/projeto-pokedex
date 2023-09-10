import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";

import colorTypes from "../../../themes/types-list-colors";
import { CardContent } from "./style";

export default function Card ({item}) {

    const {theme} = useContext(ThemeContext)

    return(
        <CardContent color={theme.Color} background={theme.BackgroundCard}>
            <div>
                <p>{item?.name}</p>
            </div>
            <img src={item?.sprites?.other.dream_world.front_default} alt={item?.name}/>
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