import React from 'react'
import Employee from '../assests/employee.png'
import Laptop1 from '../assests/laptop1.jpg'
import Laptop from '../assests/laptop.jpg'




const About = () => {
  
  return (
    <div style={{textAlign:"center"}} className='container about'>
      {/* <h3>About</h3> */}
      <div className='row'>
        <div className='col-md-8 col-sm-12 left'>
          <h1>ZANNATUL MAWA</h1>
          <h2>Front End Developer</h2>  
        </div>
        <div className='col-md-4 col-sm-12 right'>
           <img style={{width: "300px"}} src={Laptop}/>
        </div>
      </div>
    </div>
  )
}

export default About