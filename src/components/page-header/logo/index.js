import ImageLogo from "../../../assets/image/pokemonLogo.webp"
import { Image } from "./style"


export default function Logo () {
    return (
        <a href='/' aria-label="Logo pokemon">
            <Image src={ImageLogo} alt='Logo Pokemon'/>
        </a>
    )
}

