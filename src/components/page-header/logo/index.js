import ImageLogo from "../../../assets/image/pokemonLogo.png"
import { Image } from "./style"


export default function Logo () {
    return (
        <a href='/'>
            <Image src={ImageLogo} alt='Logo Pokemon'/>
        </a>
    )
}

