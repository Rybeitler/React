import React from 'react'
import StyledTextBox from './StyledTextBox'

const TextBox = (props) =>{
    return(
        <div>
            <StyledTextBox><p>{props.tabs[props.active]}</p></StyledTextBox>
        </div>
    )
}

export default TextBox;