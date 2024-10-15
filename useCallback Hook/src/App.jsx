import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './Components/ChildComponent'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // function handleClick(){
  //   setCount(count+1);
  // }
  const handleClick=useCallback(()=>{
    setCount(count+1);
  },[count]);
  return (
    <>
     <div>
      Count:{count}
     </div>
     <br />
     <button onClick={handleClick}>Increment</button>
     <br />
     <div>
      <ChildComponent buttonName="Click Me" handleClick={handleClick}/>
     </div>
    </>
  )
}

export default App
