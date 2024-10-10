import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        {/* <p>I am inside Card(Child component) name variable value: {props.name}</p> */}
        <p>{props.title}: {props.name}</p>
    </div>
  )
}

export default Card