import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const Form = (props) => {
    const [input, setInput] = useState({
        type:'people',
        id:1
    })
    const navigate = useNavigate()

    const onChangeHandler = (e) =>{
        setInput(prevState => {return{...prevState, [e.target.name]: e.target.value}})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/${input.type}/${input.id}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="type">Search for:</label>
                <select name="type" id="type" onChange={onChangeHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" name="id" value={input.id} onChange={onChangeHandler}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default Form;
