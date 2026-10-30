import React from 'react'

const Parent = () => {
    const handleChildData = (childData)=>{
        console.log(childData)
    }
  return (
    <div>
        <p>i am from parent component</p>
        <p onChildData = {handleChildData}></p>

    </div>
  )
}

export default Parent