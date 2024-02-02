import styled from "styled-components";
import Themes from "../../../../themes/themes";

export const ContainerMove = styled.ul`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 15px;
    color: #fff;

    li{
        position: relative;
        cursor: pointer;
        text-align: center;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(90deg, #CC0032 65%, #000 67%, #FFF 69%), rgba(255, 255, 255, 0.50);
    }

    li h2{
        text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;
        text-align: center;
        font-size: 20px;
        line-height: 40px;
        font-weight: 500;
        text-transform: capitalize;
    }

    .info{
        display: none;
        flex-direction: column;
        width: 280px;
        height: 290px;
        background: #BDC0CA;
        position: absolute;
        z-index: 2;
        border-radius: 5px;
        right: -50%;
        top: -150px;
        justify-content: space-between;
        gap: 10px;
        overflow-y: auto;
        padding: 20px 10px;
    }

    .info ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .info ul li{
        display: flex;
        border-radius: 3px;
        border: 1px solid #000;
        background: linear-gradient(90deg, #FFCB05 47.92%, #000 50%, #3B5BA7 52.60%);
        width: 80%;
        height: 30px;
        justify-content: space-between;
        align-items: center;
    }

    .info ul li h3{
        width: 50%;
        font-size: 14px;
        color: #000;
        text-transform: capitalize;
    }

    .info ul li p{
        width: 50%;
        font-size: 14px;
        color: #fff;
    }

    .info h2{
        line-height: 25px;  
    }

    .info p{
        font-size: 14px;
        color: ${Themes.Default.ColorLightPoke};
        text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;
    }

    li:hover .info{
        display: flex;
    }

    figure{
        width: 270px;
        text-align: center;
        align-self: center;
    }

    @media (max-width: 1440px){
        .info{
            right: -90%;
        }
    }

    @media (max-width: 1200px){
        li{
            font-size: 16px;
        }

        &{
            width: 80%;
        }

        li h2{
            font-size: 16px;
        }

        .info{
            right: -75%;
        }
    }

    @media (max-width: 480px){
        &{
            gap: 5px;
        }

        .info{
            width: 220px;
            height: 230px;
            top: -220px;
            right: -30%;
        }
        figure{
            width: 170px;
        }
    }

    @media (max-height: 830px) and (max-width: 480px){
        & li{
            height: 35px;
        }
    }
`
