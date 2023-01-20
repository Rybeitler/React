import React from 'react';

const TaskDisplay= (props) => {
    const changeActive = (task)=> {
        task.active ? task.active=false:task.active=true
    }
    const deleteCompleted = (tasks) =>{
        let activeTasks = tasks.filter((task) => task.active)
        props.updateTaskList(activeTasks)
    } 
    return (
        <div>
            {
                props.tasks.map((task, index)=>
                    <div key={index}>
                        <p style={{display:'inline-block'}}>{task.text}</p>
                        {
                            task.active?
                            <input type="checkbox" onChange={()=>changeActive(task)}/>:
                            <input type="checkbox" checked onChange={()=>changeActive(task)} />
                        }
                    </div>
                )
            }
            <button onClick={()=>deleteCompleted(props.tasks)}>Delete Completed</button>
        </div>
    );
}

export default TaskDisplay;