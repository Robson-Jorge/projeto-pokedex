import { BounceBall, ContentBox } from "./style"

export default function BounceLoader() {
    return(
        <ContentBox>
            <BounceBall animation={"bounce_up"}/>
            <BounceBall animation={"bounce_down"}/>
        </ContentBox>
    )
};