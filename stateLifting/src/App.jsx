import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  //state lifting
  //i.e create state
  //manage state
  //change state all things in parent page only
  //sabhi child mein state ko sync karwadunga
  const [name, setName] = useState('');

  return (
    <>
     <Card title="Card1" name={name} setName={setName}/>
      <p>I am inside App.jsx(parent component) name variable value:{name}</p>
      <Card title="Card2" name={name} setName={setName}/>
    </>
  )
}

export default App
