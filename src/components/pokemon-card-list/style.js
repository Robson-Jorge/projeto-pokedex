import styled from "styled-components";

export const PokemonList = styled.ul`
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 500px;
    align-items: center;
    text-align: center;
    font: 22px 'Gloock';
    gap: 35px;

    .err{
        max-width: 600px;
        padding: 10px 15px;
        line-height: 26px;
        border-radius: 25px;
        background-color: #000;
        color: #fff;
    }
`