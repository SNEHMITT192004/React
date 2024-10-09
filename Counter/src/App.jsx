import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;
  
  // const addValue=()=>{
  //       console.log("value added");
  // }

  let [counter,setCounter]=useState(5);
  //use 'let' if counter=counter+1;

  const addValue=()=>{
    if(counter<20){
    counter=counter+1;
    setCounter(counter);
    // console.log("value added",counter);
    }
}
   const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1);
    }
   }

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value:{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value:{counter}</button>
    </>
  )
}

export default App
