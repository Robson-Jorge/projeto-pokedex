import styled from "styled-components"

export const Image = styled.img`
    width: 150px;
    height: fit-content;

    @media (max-width: 720px) {
        &:first-child{
            width: 120px; 
            padding: 15px 0;     
        }
    }

    @media (max-width: 480px) {
        &:first-child{
            padding: 10px 0;
        }
    }
`