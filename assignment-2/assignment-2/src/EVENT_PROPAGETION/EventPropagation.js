import React from 'react'

const EventPropagation = () => {
    const handleParent = (event)=>{
        console.log("this is parent button",event)
    }
    const handleChild = (event)=>{
        event.stopPropagation()
        console.log("this is child button",event)
    }
  return (
    <div onClick={handleParent}>
        <h1>welcome</h1>
        <button onClick={handleChild}>Click me!</button>
    </div>
  )
}

export default EventPropagation