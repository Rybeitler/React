import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Display from './components/Display';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:text" element={<Display/>}/>
        <Route path="/:text/:color1/:color2" element={<Display/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
