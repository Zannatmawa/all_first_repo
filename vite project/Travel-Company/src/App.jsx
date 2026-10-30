import './App.css';
import Home from './components/Home.';
import { Routes,Route } from 'react-router-dom';
import AboutDetails from './components/Body/AboutDetails';
import NavigationBar from './components/Header/NavigationBar'
import BookOnline from './components/Body/BookOnline';
// import CardGrp from './components/Body/CardGrp';


function App() {
  return (
    <div >
       <NavigationBar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about-details' element={<AboutDetails />}/>
        <Route path='/book-online' element={<BookOnline />}/>
          {/* <Route path='/card-grp' element={<CardGrp />} /> */}
        {/* </Route> */}
      </Routes>
         
    </div>
  );
}

export default App;
