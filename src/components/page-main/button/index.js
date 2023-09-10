import { Button } from "./style"

export default function LoadButton ({onClick}) {
    return(
        <>
            <Button onClick={onClick}>Carregar mais</Button>
        </>
    )
}