import Icon from '../../image/icon-search'
import styled from 'styled-components'

export default function SearchBar () {
    return (
        <>
            <SearchIcon>
                <input type='text' placeholder='Search'></input>
                <Icon/>
            </SearchIcon>
        </>
    )
}

const SearchIcon = styled.div`
    display: flex;
    position: relative;
    font-size: 24px;
    width: 450px;
    height: 40px;
    color: #000;
    input {
        width: 450px;
        height: 40px;
        border-radius: 8px;
        padding: 8px;
        border: 1px solid #000;
        background-color: rgba(217, 217, 217, 0.5);
        outline: none;
        font-weight: bold;
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