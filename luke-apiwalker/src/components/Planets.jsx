
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Obi from './Obi';

const Planets = (props) => {
    const [planet, setPlanet] = useState({})
    const {id} = useParams();
    const[error, setError] = useState(false)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            setError(false)
            setPlanet(response.data)})
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
                        <h2>{planet.name}</h2>
                        <p><span style={{fontWeight:'bold'}}>Climate:</span> {planet.climate}</p>
                        <p><span style={{fontWeight:'bold'}}>Terrain:</span> {planet.terrain}</p>
                        <p><span style={{fontWeight:'bold'}}>Surface Water:</span> {planet.surface_water===0?'true':'false'}</p>
                        <p><span style={{fontWeight:'bold'}}>Population:</span> {planet.population}</p>
                    </div>
            )}
        }
}

export default Planets;
