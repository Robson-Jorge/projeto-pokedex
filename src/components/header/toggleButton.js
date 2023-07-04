import styled from "styled-components";

export default function Toggle () {
    return (
        <ButtonContainer>
            <Button/>
        </ButtonContainer>      
    )
}

const ButtonContainer = styled.div`
    width: 83px;
    height: 30px;
    border: 2px solid #000;
    border-radius: 25px;
    background-color: #3B5BA7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

const Button = styled.button`
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 50%;
    background-color: #FFCB05;
    margin: 0 3px;
    cursor: pointer;
`