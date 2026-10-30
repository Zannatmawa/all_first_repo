import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='about-section'>
        <div>
            <h2 className='common-h2'>This is Our Story</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <a onClick={()=> navigate('about-details')}  className='btn  btn-outline-dark common-btn'>Read More</a>
        </div>       
    </div>
    <h2 className='common-h2'>What Makes Us Speacial</h2>
        <div className='about-us'>
          <div className='div'>
            <h4>Local Expert Guides</h4>
            <p>I'm a title. Click here to add your own text and edit me.</p>
          </div>
          <div className='div'>
            <h4>Handpicked Adventures</h4>
            <p>I'm a title. Click here to add your own text and edit me.</p>
          </div>
          <div className='div'>
            <h4>
            Hidden Gem Destinations</h4>
            <p>I'm a title. Click here to add your own text and edit me.</p>
          </div>
        </div>
    </>
  )
}

export default About