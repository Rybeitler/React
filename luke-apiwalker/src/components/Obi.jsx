import React from 'react';
import obiwan from "./img/Ben_Kenobi.png"

const Obi = (props) => {
    return (
        <div style={{textAlign:'center'}}>
            <h2>These are not the droids you are looking for!</h2>
            <img src={obiwan} alt="Obi-wan!" />
        </div>
    );
}

export default Obi;
