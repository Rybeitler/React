import React from 'react';
import { useParams } from 'react-router-dom';

const Display = (props) => {
    const {text, color1="black", color2="white"} = useParams();
    return (
        <div>
            {
                isNaN(text)?
                <h2 style={{textAlign:'center', color:color1, backgroundColor:color2}}>The word is: {text}</h2>:
                <h2 style={{textAlign:'center', color:color1, backgroundColor:color2}}>The number is: {text}</h2>
                
            }
        </div>
    );
}

export default Display;
