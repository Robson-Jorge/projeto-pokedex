import styled from "styled-components";

export const ContainerStatus = styled.ul` 
    display: flex;
    width: 70%;
    flex-direction: column;
    gap: 15px;
    
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(90deg, #CC0032 65%, #000 67%, #FFF 69%), rgba(255, 255, 255, 0.50);
    }
    li h2{
        width: 70%;
        display: flex;
        justify-content: center;
        color: #fff;
        text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;
        font-size: inherit;
        line-height: 40px;
        font-weight: 500;
        text-transform: capitalize;
    }
    li span{
        width: 30%;
        display: flex;
        font-size: inherit;
        justify-content: center;
    }

    @media (max-width: 1200px){
        width: 80%;

        li{
            font-size: 16px;
        }
    }

    @media (max-height: 830px) and (max-width: 480px){
        gap: 5px;
    }
`