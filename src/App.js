import './App.css';
import Inputs from './components/Inputs';
import React, { useState, useEffect } from 'react'

function App() {
  const [clicks, setClicks] = useState([])

  const clickButton = () => {

    setClicks(prevArray => [...prevArray, 'newClick'])
    console.log(clicks)


  }
  return (
    <div className="App">
    <h1>Add new input fields</h1>

      {clicks.map((click, i) => {
        return (
          <Inputs key={i}/>
        )
      }) }
      <button onClick={clickButton}>Add More!</button>

    </div>
  );
}

export default App;
