import { useState, useEffect } from 'react';
import {getPokemon, getPokemonType} from '../services/pokemon';

export default function TypePoke () {
    const [poke, setPoke] = useState([])

    useEffect(() =>{

      (async () => {
        const data = await getPokemonType()
        setPoke(data)
      })()

      // const fetchData = async () => {
      //   const data = await getPokemon()
      //   setPoke({
      //     pokemon : data
      //   })          
      // }  
      // console.log(poke);    

      // fetchData()
        
    },[])
    // console.log(poke);
    // console.log('Renderizou');


    // useEffect(() =>{
    //   function addType() {
    //     if(poke.pokemon.types > 0){
    //       const types = poke.pokemon.types

    //       console.log(types);
    //       for (const type of types) {
    //         return console.log(type.type.name);
    //       };
    //     }
    //   } 

    //   addType()                  
    // },[])

    // function teste() {
    //   if(poke != ''){
    //     const types = poke.types

    //     // console.log(types);
    //     types.forEach(type => {
    //       return console.log(type.type.name)
    //     });
    //   }
    //   // console.log(types);
    // }
    // teste()
      
    // if(poke != ''){
    //   const pokemonType = poke.types[0].type.name
    //   console.log(pokemonType);
    // }

    let typePokemon = ''
    poke.forEach(typo => {
      typePokemon += `Type pokemon ${typo}/`
    })
    // console.log(typePokemon);

  return (
    <>
      
        <h1>{}</h1>
    </>
  )
}