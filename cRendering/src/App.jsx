import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login';
import Logout from './Components/Logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const changeState=()=>{
      setIsLoggedIn(isLoggedIn=>!isLoggedIn);
   }
   let content;

  // Use if-else to determine what to render
  if (isLoggedIn) {
    content = <Logout />;
  } else {
    content = <Login />;
  }
  return (
    <>
      {content}
      <br/>
      <button onClick={changeState}>
        Change State 
      </button>
      <p>isLoggedIn State: {isLoggedIn.toString()}</p>
    </>
  )
}

export default App
