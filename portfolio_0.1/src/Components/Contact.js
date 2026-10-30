import React from 'react'
import Html from '../assests/files.png'
import Css from '../assests/css.png'
import Bootstrap from '../assests/bootstrap.png'
import Javascript from '../assests/javascript.png'

const Contact = () => {
  return (
    <div class="description carouselSection">
    <h2>My Skills</h2>
    <p class="ArrowArea">
            1/6
            <span><img src="images/arrow-left.svg" alt=""/></span>
            <span><img src="images/arrow-right.svg" alt=""/></span>
        </p>
    <div class="services owl-carousel">
        <div class="item">
            <img src={Html} alt=""/>
            <h3>HTML</h3>
        </div>
        <div class="item">
            <img src={Css} alt=""/>
            <h3>CSS</h3>
        </div>
        <div class="item">
            <img src={Bootstrap} alt=""/>
            <h3>BOOTSTRAP</h3>
        </div>
        <div class="item">
            <img src={Javascript} alt=""/>
            <h3>JAVASCRIPT</h3>
        </div>
    </div>
</div>
  )
}

export default Contact
