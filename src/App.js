// import { useState, useEffect } from 'react';
// import getPokemon from './services/pokemon';
import Header from "./components/header/"
import './App.css';

function App() {

  // const [poke, setPoke] = useState({
  //   pokemon: []
  // })

  // useEffect(() =>{
  //   const fetchData = async () => {
  //     const data = await getPokemon()

  //     setPoke({
  //       pokemon : data
  //     })
           
  //   }
  //   fetchData()
  // },[])

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
    </div>
  );
}

export default App;
