import styled from "styled-components";

export const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: relative;
`

export const BounceBall = styled.span`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #3B5BA7;
    border: 3px solid #2B4B97;
    opacity: 0.7;
    animation: ${({animation}) => animation} 1.5s ease-in-out infinite alternate;
    position: absolute;

    @keyframes bounce_up {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to{
            transform: scale(1);
        }
    }

    @keyframes bounce_down {
        from {
            transform: scale(1);
        }
        to{
            transform: scale(0);
            opacity: 1;
        }
    }
`
