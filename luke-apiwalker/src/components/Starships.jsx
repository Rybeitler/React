
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Obi from './Obi';

const Starships = () => {
    const [ship, setShip] = useState({})
    const {id} = useParams();
    const[error, setError] = useState(false)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then(response => {
            setError(false)
            setShip(response.data)})
        .catch((error)=>{
            setError(true)
        })
    },[])


        {
            if(error){
                return(
                    <Obi />
                )
            }else{
                return(
                    <div style={{textAlign:'center'}}>
                        <h2>{ship.name}</h2>
                        <p><span style={{fontWeight:'bold'}}>Manufacturer:</span> {ship.manufacturer}</p>
                        <p><span style={{fontWeight:'bold'}}>Price in credits:</span> {ship.cost_in_credits}</p>
                        <p><span style={{fontWeight:'bold'}}>Crew:</span> {ship.crew}</p>
                        <p><span style={{fontWeight:'bold'}}>Class:</span> {ship.starship_class}</p>
                    </div>
            )}
        }
}

export default Starships;
