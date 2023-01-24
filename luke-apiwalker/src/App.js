import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import People from './components/People'
import Planets from './components/Planets'
import Starships from './components/Starships'
import Home from './components/Home'


function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{margin:'10px'}}>
        <Form />
      </div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/people/:id' element={<People />}/>
      <Route path='/planets/:id' element={<Planets />}/>
      <Route path='/starships/:id' element={<Starships />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
