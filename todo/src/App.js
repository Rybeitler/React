import React, {useState} from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskDisplay from './components/TaskDisplay';

function App() {
const [tasks, setTasks] = useState([])

const addTask = (task)=>{
  setTasks(prevState => {return[...prevState, task]})
}
const updateTaskList = (updatedList)=>{
  setTasks(updatedList)
}
// const changeActive = (taskIndex) => {
//   setTasks(prevState => {return[...prevState, ]})
// }
  return (
    <div className="App">
      <h1>Set and Manage your Tasks!</h1>
      <TaskForm addTask={addTask}/>
      <TaskDisplay tasks={tasks} updateTaskList={updateTaskList}/>
    </div>
  );
}

export default App;
