import styled from 'styled-components'
import Themes from '../../themes/themes'

export const SearchIcon = styled.div`
    display: flex;
    position: relative;
    width: 450px;
    height: 40px;

    input {
        width: 450px;
        height: 40px;
        font-size: 16px;
        border-radius: 8px;
        padding: 8px 40px;
        border: 1px solid #000;
        background-color: ${Themes.Default.BackgroundColorPrimary};
        outline: none;
    }

    input::placeholder{
        color: #000;
    }

    svg:first-child {
        width: 22px;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    svg:last-child {
        width: 10px;
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    @media (max-width: 750px) {
        &{
            width: 80%;
            order: 2;
            margin: 0 auto ;
        }

        input{
            width: 100%;
        }
    }
`