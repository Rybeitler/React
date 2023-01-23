import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0/")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  }, []);

  return (
    <div className="App">
      {
        pokemon.length > 0 && pokemon.map((pokemon, index)=>{
          return (<div key={index}>{pokemon.name}</div>)
        })
      }
    </div>
  );
}

export default App;
