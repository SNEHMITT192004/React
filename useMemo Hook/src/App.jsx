import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input,setInput]=useState(0);

  function expensiveTask(num){
    console.log("inside Expensive task");
    //due to this it takes a lot time to re-render
    for(let i=0;i<=1000000000;i++) {}
    return num*2;
    
  }
  
  // let doubleVal=expensiveTask(input);
  
  //ans will be memorized only for last variable 
  //suppose 3 then 4 so 3 val will be stored
  //but not for before 3 val 
  let doubleVal= useMemo(()=>expensiveTask(inp),[input])
  return (
    <>
      <button onClick={()=>setCount(count+1)}>
        Increment
      </button>
      <div>Count: {count}</div>
      <div>
        Double:{doubleVal}
      </div>
      <input type="number" value={input} placeholder='Enter a number'
      onChange={(e)=>setInput(e.target.value)} />
    </>
  )
}

export default App
