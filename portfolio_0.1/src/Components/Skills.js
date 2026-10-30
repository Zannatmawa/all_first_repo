import React from 'react'
import Project1 from '../assests/ss1.png'
import Project2 from '../assests/ss2.png'
import Project3 from '../assests/ss3.png'
import Project4 from '../assests/ss4.png'


const Skills = () => {
  return (
    <div className='container project-section text-center'>
      <div className='row'>
      <div class="container1 col-md-4">
        <img alt="gallery"  src={Project1} className='image' />
        <div class="overlay">
          <div class="text">
              <h2> subtitle</h2>
                <h1>subtitle </h1>
                <p >subtitle</p>
          </div>
        </div>
    </div>
    <div class="container1 col-md-4">
        <img alt="gallery"  src={Project2} className='image' />
          <div class="overlay">
            <div class="text">
                <h2> subtitle</h2>
                  <h1>subtitle </h1>
                  <p >subtitle</p>
            </div>
          </div>
    </div>
    <div class="container1 col-md-4">
        <img alt="gallery"  src={Project3} className='image' />
          <div class="overlay">
            <div class="text">
                <h2> subtitle</h2>
                  <h1>subtitle </h1>
                  <p >subtitle</p>
            </div>
          </div>
    </div>
    {/* <div class="container1 col-md-6">
        <img alt="gallery"  src={Project4} className='image' />
          <div class="overlay">
            <div class="text">
                <h2> subtitle</h2>
                  <h1>subtitle </h1>
                  <p >subtitle</p>
            </div>
          </div>
    </div> */}
      </div>

      <button className='btn btn-outline-dark'>More work</button>
    </div>
  )
}

export default Skills