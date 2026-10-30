import React from 'react'
import {projects} from '../Data'
import Employee from '../assests/employee.png'


const Projects = () => {
  
  return (
     <div className='container'>
      <h2>My Projects</h2>
      <div className='row m-auto'>
        <div className='col-md-6'>
        {projects.map((project) => (
            <a  href={project.link}  key={project.image} >
             <div class="container1">
                <img alt="gallery"  src={Employee} className='image' />
                  <div class="overlay">
                    <div class="text">
                        <h2> subtitle</h2>
                          <h1>subtitle </h1>
                          <p >subtitle</p>
                    </div>

                    {/* {project.subtitle}{project.title} {project.description}*/}
                  </div>
            </div>
            </a>
          ))}
        </div>
        <div className='col-md-6'><img  width={200} src={Employee}/></div>
      </div>
     </div>
  )
}

export default Projects