import styled from "styled-components";
import Themes from "../../../../themes/themes";

export const ContainerAbility = styled.ul`
    display: flex;
    height: 90%;
    flex-direction: column;
    text-align: center;
    padding: 0 25px;
    color: #fff;
    gap: 20px;
    overflow-y: auto;

    h2{
        color: ${Themes.Default.ColorLightPoke};
        font-size: 22px;
        margin-bottom: 10px;
        text-transform: capitalize;
    }

    p{
        font-size: 18px;
    }

    .list{
        display: none;
    }

    @media (max-width: 1200px){
        #ability h1{
        font-size: 18px;
        }

        #ability p{
            font-size: 16px;
        }
    }
`