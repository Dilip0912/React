import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(115)         //counter is a value and setCounter function works on counter variable
  // let counter=11;
  const addValue=()=>{
    console.log(`added`);
    if(counter<125){
      counter=counter+1;
    }
    setCounter(counter);        
  }
  const subtractValue=()=>{
    console.log(`subtracted`);
    if(counter>105){
      counter=counter-1;
    }
    setCounter(counter);
  }
  return (
    <>
    <h1>Value:{counter}</h1>
    {/* <h2>Subtract:{counter}</h2> */}
    <button onClick={addValue}>Add by one</button>
    <button onClick={subtractValue}>Subtract by one</button>
    </>
  )
}

export default App
