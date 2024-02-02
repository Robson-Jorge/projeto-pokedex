import IconOff from "../icons/icon-off"
import Icon from "../icons/icon-search"
import { SearchIcon } from "./style"
import { useState } from "react"

export function SearchBar({ onValueChange }) {
  const [valueInput, setValueInput] = useState("")

  function handleInputChange(e) {
    const newValue = e.target.value
    setValueInput(newValue)
    if(newValue === "") {
      onValueChange("")
    }
  }

  function handleChange() {
    onValueChange(valueInput)
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleChange()
    }
  }

  function handleCleanUp() {
    setValueInput("")
    onValueChange("")
  }

  return (
    <SearchIcon>
      <Icon onClick={handleChange} />
      <input 
        placeholder="Search for name or number"
        value={valueInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      ></input>
      {valueInput && <IconOff onClick={handleCleanUp} />}
    </SearchIcon>
  )
}
