import { Button } from "./style"

export default function LoadButton ({onClick, onFilterPoke}) {

    return(
        <Button disabled={onFilterPoke} onClick={onClick}>
            show more
        </Button>
    )
}