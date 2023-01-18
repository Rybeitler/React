import React from 'react'
import StyledTab from './StyledTab';

const Tab = (props) =>{
    const changeActive = (index)=>{
        props.activate(index)
    }
    let color= 'white'
    let bgColor = 'black'
    const checkActive = (i) =>{
        if (i === props.active){
            color='white'
            bgColor='blue'
        }else{
            color='black'
            bgColor='white'
        }
    }
    return (
        <div>
            {
                props.tabs.map((tab, index) =>
                    <div key={index} style={{display:'inline-block'}}>
                        {checkActive(index)}
                        <StyledTab color={color} bgColor={bgColor}><p onClick={(e)=> changeActive(index)}>Tab {index+1}</p></StyledTab>
                    </div>
                )
            }
        </div>
    )
}

export default Tab;