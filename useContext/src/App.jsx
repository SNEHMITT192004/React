import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildC from './Components/ChildC';

//step1:create
const userTheme=createContext();

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
     <userTheme.Provider value={{theme,setTheme}}>
      <div id="container" style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildC/>
      </div>
     </userTheme.Provider>
    </>
  )
}

export default App
export {userTheme}