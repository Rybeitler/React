import React, {useState} from 'react'

const BoxForm = (props) => {
const [newBox, setNewBox] = useState("")
const [boxSize, setBoxSize] = useState('')

const handleSubmit = (e)=>{
    e.preventDefault();
    let addMe = {
        color:newBox,
        size:boxSize
    }
    props.onNewBox(addMe)
    setNewBox('')
    setBoxSize('')
}
return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="newBox">Color</label>
        <input type="text" value={newBox} name='newBox'
            onChange={(e)=> setNewBox(e.target.value)}/>
        <label htmlFor="size">Size(in px)</label>
        <input type="text" name="size" value={boxSize} 
            onChange={(e)=> setBoxSize(e.target.value)}/>
        <input type="submit" value="Add Box" />
    </form>
)
}

export default BoxForm;