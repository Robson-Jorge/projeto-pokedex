import Icon from '../../image/icon-search'
import styled from 'styled-components'
import Themes from '../themes/themes'

export default function SearchBar () {

    return (
        <>
            <SearchIcon>
                <input type='text' placeholder='Search'></input>
                <Icon />
            </SearchIcon>
        </>
    )
}

const SearchIcon = styled.div`
    display: flex;
    position: relative;
    width: 450px;
    height: 40px;
    input {
        width: 450px;
        height: 40px;
        font-size: 16px;
        border-radius: 8px;
        padding: 8px;
        border: 1px solid #000;
        background-color: ${Themes.Default.BackgroundColorPrimary};
        outline: none;
    }
    input::placeholder{
        color: #000;
    }
    svg {
        width: 22px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`