import { useState, useEffect } from 'react';
import  styled   from "styled-components";
import getPokemon from './services/pokemon';
import './App.css';

const Title = styled.h1`
  color: #f00;
  font-size: 80px;
  text-transform: uppercase;
`

function App() {

  const [poke, setPoke] = useState({
    pokemon: []
  })

  useEffect(() =>{
    const fetchData = async () => {
      const data = await getPokemon()

      setPoke({
        pokemon : data
      })
      
      console.log(data); 
    }
    fetchData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Title>
          {poke.pokemon.name}
        </Title>
      </header>
    </div>
  );
}

export default App;
