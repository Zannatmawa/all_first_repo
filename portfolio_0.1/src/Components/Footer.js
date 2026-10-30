import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
       <div  className='footer-section'>
            <div>
                <h4>Links</h4>
                <div className='box'></div>
                <a>LinkdIn</a>
                <a>Facebook</a>
                <a>Github</a>
            </div>

            <div>
                <h4>About</h4>
                <div className='box'></div>
                <a>Projects</a>
                <a>Skills</a>
                <a>Contact</a>
            </div>

            <div>
                <button className='btn btn-outline-light'>Download CV</button>
                <button className='btn btn-outline-light'>Let's Talk</button>
            </div>
       </div>

    </div>
  )
}

export default Footer