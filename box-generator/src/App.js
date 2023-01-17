import React, {useState} from 'react'
import BoxForm from './components/BoxForm'
import BoxDisplay from './components/BoxDisplay'
import './App.css';

function App() {
  const [boxArr, setBoxArr] = useState([])

  const addBox = (newBox) =>{
    setBoxArr(boxArr => [...boxArr, newBox])
  }
  return (
    <div className="App">
      <BoxForm onNewBox={addBox}/>
      <BoxDisplay boxes = {boxArr}/>
    </div>
  );
}

export default App;
