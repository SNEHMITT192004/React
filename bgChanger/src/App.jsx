import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")
  //in this onclick callback is calling function 
  //as we need to pass parameter so we used like that 
  return (
    <div className="w-screen h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-full' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("beige")} className='outline-none px-4 rounded-full' style={{backgroundColor:"beige"}}>Beige</button>
          <button onClick={()=>setColor("lavender")} className='outline-none px-4 rounded-full' style={{backgroundColor:"lavender"}}>Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
