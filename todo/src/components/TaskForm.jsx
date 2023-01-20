import React, {useState} from 'react';

const TaskForm = (props) =>{
const [task, setTask] = useState({
    text:'',
    active: true
})

const onChangeHandler = (e) =>{
    setTask(prevState => {return{...prevState, [e.target.name]: e.target.value}})
}
const handleSubmit = (e)=>{
    e.preventDefault();
    props.addTask(task);
    setTask({text:'', active: true})
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Enter a new Task: </label>
                <input type="text" name='text' value={task.text} onChange={onChangeHandler} />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;