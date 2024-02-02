import styled from "styled-components";
import Themes from "../../themes/themes";

export const InfoPoke = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 520px;
    border-radius: 8px;
    background: url(${Themes.Default.BackgroundModalInfo}) no-repeat center / cover;
    position: relative;
    margin-bottom: 20px;

    nav{
        display: flex;
        position: absolute;
        width: 100%;
        justify-content: space-around;
        left: 50%;
        top: -25px;
        transform: translateX(-50%);
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${Themes.Default.ColorLightPoke};
            border-radius: 10px 10px 0px 0px;
            list-style: none;
            text-align: center;
            cursor: pointer;
        }
        
        li:hover{
            background-color: ${Themes.Default.ColorDarkPoke};
            color: #fff;
        }
        
        li button{
            background-color: transparent;
            font-size: 18px;
            color: inherit;
            width: 91px;
            height: 28px;
        }

        .active{
            background-color: ${Themes.Default.ColorDarkPoke};
            color: #fff; 
        }

    }

    @media (max-width: 480px){
        nav li{
            font-size: 16px;
        }

        nav li button{
            width: 78px;
            line-height: 24px;
        }
    }

    @media (max-width: 1200px){
        width: 80%;
        height: 480px;
        align-self: center;
    }

    @media (max-height: 830px) and (max-width: 480px){      
        height: 380px;
    }
`