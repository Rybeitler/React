import React from 'react'

const BoxDisplay = (props) =>{
    
    return(
        <div>
            {
                props.boxes.map((box, index) =>
                    <div key={index} style={
                        {height:box.size+'px', width:box.size+'px', margin:'10px', backgroundColor:box.color, display:'inline-block'}}></div>
                )
            }
        </div>
    )
}

export default BoxDisplay;