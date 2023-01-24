import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Obi from './Obi';


const People = (props) => {
    const [person, setPerson] = useState({});
    const [home, setHome] = useState('');
    const {id} = useParams();
    const[error, setError] = useState(false)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            setError(false);
            setPerson(response.data);
            axios.get(response.data.homeworld)
                .then(info=>{
                    setHome(info.data.name)
                })
        })
        .catch((error)=>{
            setError(true)
        })
    },[id])



        {
            if(error){
                return(
                    <Obi />
                )
            }else{
                return(
                    <div style={{textAlign:'center'}}>
                        <h2>{person.name}</h2>
                        <p><span style={{fontWeight:'bold'}}>Height:</span> {person.height}</p>
                        <p><span style={{fontWeight:'bold'}}>Hair Color:</span> {person.hair_color}</p>
                        <p><span style={{fontWeight:'bold'}}>Eye Color:</span> {person.eye_color}</p>
                        <p><span style={{fontWeight:'bold'}}>Skin Color:</span> {person.skin_color}</p>
                        <p><span style={{fontWeight:'bold'}}>HomeWorld:</span> {home}</p>
                    </div>
            )}
        }
    
}

export default People;
