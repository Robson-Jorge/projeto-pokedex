import styled from "styled-components";

const ButtonContainer = styled.div`
    width: 83px;
    height: 30px;
    border: 1px solid ${props => props.color};
    border-radius: 25px;
    background-color: ${props => props.background};
    display: flex;
    align-items: center;
    transition: 0.5s ease-in-out;

    @media (max-width: 720px){
        width: 77px;
        height: 24px;
    }

    @media (max-width: 480px){
        width: 75px;
        height: 22px;
    }
`

const Button = styled.button`
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 50%;
    background-color: ${props => props.background};
    margin: 0 3px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    transform: ${props => props.transform};

    @media (max-width: 720px){
        width: 20px;
        height: 20px;
    }

    @media (max-width: 480px){
        width: 18px;
        height: 18px;
    }
`

export { ButtonContainer, Button }