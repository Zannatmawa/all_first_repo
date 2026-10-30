import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Home />
        {/* <About /> */}
        {/* <Projects /> */}
        <Skills />
        <Contact />
      <Footer />

        {/* <div style={{textAlign:"center", margin:"30px"}}>           
      </div> */}



      </BrowserRouter>
    </div>
  );
}

export default App;
