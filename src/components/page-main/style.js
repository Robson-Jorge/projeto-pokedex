import styled from "styled-components"

export const MainContent = styled.main`
margin-top: 90px;
width: 100vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0 40px;
margin-bottom: 20px;

@media (max-width: 720px) {
    &{
        margin-top: 150px;
    }
}

@media (max-width: 480px) {
    &{
        margin-top: 135px;
    }
}
`