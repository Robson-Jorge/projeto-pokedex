import { useState } from 'react';

import Icon from '../../../assets/svg/icon-search'
import { SearchIcon } from './style';

export default function SearchBar({ onValueChange }) {

    const [valueInput, setValueInput] = useState()

    const handleInput = (e) => {
        const newValue = e.target.value;
        setValueInput(newValue);
    };

    const handleChange = () => {
        onValueChange(valueInput);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleChange();
        }
    };

    return (
        <SearchIcon>
            <input
                type='text'
                placeholder='Search for name or number'
                onChange={handleInput}
                onKeyPress={handleKeyPress}>
            </input>
            <Icon onClick={handleChange} />
        </SearchIcon>
    )
}