import React from 'react'
import NavigationBar from './NavigationBar'
import Employee from '../assests/employee.png'

const Home = () => {
  return (
    <div>
        <NavigationBar />

        <div class="hero-section">
            <div class="circle">
                <img src={Employee} alt="" />
                </div>
                <div className='text-section'>
                    <h1>My name is Zannatul mawa.</h1>
                    <h4>Front End Developer</h4>
                    <button className='btn btn-outline-dark'>Let's talk</button>
                    
                </div>
                
         </div>
    </div>
  )
}

export default Home