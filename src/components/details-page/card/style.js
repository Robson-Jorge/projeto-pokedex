import styled from "styled-components";

export const CardContent = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    transition: 0.3s ease-in-out;
    color: ${props => props.color};
    gap: 60px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid;
        font-size: 22px;
        line-height: 20px;
        text-transform: capitalize;
        font-family: 'Gloock';
        font-weight: 700;
        letter-spacing: 4px;
    }

    img{
        width: 100%;
        max-height: 300px;
    }

    ul{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 45px;
    }

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        width: 92px;
        height: 35px;
        font-size: 20px;
        border-radius: 20px;
        font-family: 'Acme';
    }

    li:hover{
        cursor: default;
        color: #000;
    }

    @media (max-width: 1000px){
        &{
            width: 50%;
            padding: 15px;
            gap: 20px;
        }

        ul{
            gap: 18px;
        }
    }

    @media (max-width: 480px){
        &{
            height: 50vh;
            padding: 8px;
            margin-top: 35px;
        }

        li{
            font-size: 18px;
        }
    }
`