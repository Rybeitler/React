import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0/")
            .then(response => setPokemon(response.data.results))
    })
    return (
        <div>
            <ul style={{listStyle:'none', margin:'2px', fontWeight:'bold'}}>
                {
                    pokemon.length > 0 && pokemon.map((eachPoke, i) => {
                        return (
                            (<li key={i}>{eachPoke.name}</li>)
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Pokemon;
