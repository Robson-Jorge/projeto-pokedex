import { Link } from "react-router-dom"
import ImageLogo from "../../assets/image/pokemonLogo.webp"
import { Image } from "./style"

export default function Logo () {
    return (
        <Link to='/' aria-label="Logo pokemon">
            <Image src={ImageLogo} alt='Logo Pokemon'/>
        </Link>
    )
}

