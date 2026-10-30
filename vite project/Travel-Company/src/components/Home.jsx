import React from 'react'
import '../styles/Style.css';
import '../styles/Responsive.css';
import 'bootstrap/dist/css/bootstrap.css';
import HeroSection from './Header/HeroSection';
import About from './Body/About';
import Testomonials from './Body/Testomonials';
import PictureSection from './Body/PictureSection';
import Contact from './Footer/Contact';
import Footer from './Footer/Footer';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <PictureSection />
      <Testomonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home