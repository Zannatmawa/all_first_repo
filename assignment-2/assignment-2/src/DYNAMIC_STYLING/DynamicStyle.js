import React, { useState } from 'react'

const DynamicStyle = () => {
  const [validInput, setValidInput] = useState(true)
  const [name, setName] = useState("")


  const handleOnChange = (e)=>{
    setName(e.target.value)
    if(name.length > 2){
      setValidInput(false)
    }
    else{
      setValidInput(true)
    }
  }
  return (
    <div>
      <label>type here</label>
      <input type='text' value={name}  
      onChange={handleOnChange}
      
      />
    </div>
  )
}

export default DynamicStyle