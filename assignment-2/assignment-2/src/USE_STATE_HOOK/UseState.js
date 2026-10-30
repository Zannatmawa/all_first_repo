import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)

    const handeIncrement = ()=>{
        setCount (count+1)
    }
    const handeDecrement = ()=>{
        setCount (count-1)
    }
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={handeIncrement}>Increment</button>
        <button onClick={handeDecrement}>Decrement</button>
    </div>
  )
}

export default UseState