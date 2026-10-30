import React from 'react'


const RecipeFinder = ({title,calories,image,ingredients}) => {
  return (
    <div className='recipe'>
      <h2>{title}</h2>
      <h4> Calories:{calories}</h4>
      <img className='image' alt="Sample"  src={image}/>
      {/* <p>{ingredients[1]}</p> */}
      <button className='btn btn-outline-dark'>More Details</button>
    </div>
  )
}

export default RecipeFinder