import React from 'react'
import videobg from '../../assets/vid3.mp4'


const HeroSection = () => {
  return (
    <>
    <div className='hero-section'>
         <video src={videobg} autoPlay loop muted/>      
          <div className='content'>
          <h1>URBAN NOMAD ADVENTURE</h1>
          <h3>Experience Oregon like a Local</h3>
          <button className='btn btn-outline-dark common-btn'>Let's Go</button>
          </div>
    </div>
    </>
  )
}

export default HeroSection