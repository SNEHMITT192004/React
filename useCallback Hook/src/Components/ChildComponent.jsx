// import React from 'react'

// function ChildComponent(props) {
//   return (
//     <div>
//         {console.log("Child component is being re-rendered")}
//         <button>{props.buttonName}</button>
//     </div>
//   )
// }

// export default ChildComponent
import React from 'react'

const ChildComponent = React.memo((props) => {
    return (
        <div>
         {console.log("Child component is being re-rendered")}
          <button onClick={props.handleClick}>{props.buttonName}</button>
        </div>  
    )
  }
  
)
export default ChildComponent
//React.memo->wrap->component->component 
//re-render tabhi hoga jab props change honge nahi toh
//re render nhi hoga

//Disadv of React.Memo
//if u r sending a function,then react.memo won't be 
//able to save you from re rendering