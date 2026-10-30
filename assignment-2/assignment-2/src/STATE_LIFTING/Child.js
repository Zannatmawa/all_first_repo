import React from 'react'

const Child = (props) => {
    childData = 'i am from child component'
    props.onChildData(childData)
  return (
    <div>
        <p>{props.childData}</p>
    </div>
  )
}

export default Child