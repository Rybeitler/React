import Tab from './components/Tab';
import TextBox from './components/TextBox';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [tabsArr, setTabsArr] = useState(['blah1', 'blah2', 'blah3'])
  const [active, setActive] = useState(0)

  const activate = (activeIndex) =>{
    setActive(activeIndex)
  }
  return (
    <div className="App">
      <Tab tabs={tabsArr} activate={activate} active={active}/>
      <TextBox tabs={tabsArr} active={active}/>
    </div>
  );
}

export default App;
