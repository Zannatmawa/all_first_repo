import React from 'react'
import videobg from '../../assets/vid2.mp4'
import video from '../../assets/vid1.mp4'
import pic1 from '../../assets/pic1.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic7 from '../../assets/pic7.jpg'

const PictureSection = () => {
  return (
    <>
    <div className='video-div'>
         <video src={videobg} autoPlay loop muted/>
         <video src={video} autoPlay loop muted/>
    </div>
    <div className='img-div'>
        <img src={pic1} />
        <img src={pic4} />
        <img src={pic7} />
    </div>
    </>
  )
}

export default PictureSection