import React, { useContext } from 'react'
import { userTheme } from '../App'

function ChildC() {
    const {theme,setTheme}=useContext(userTheme);
    //toogle theme
    function handleClick(){
        if(theme==='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
  return (
    <>
    <button onClick={handleClick}>
    Change Theme
    </button>
    </>
  )
}

export default ChildC