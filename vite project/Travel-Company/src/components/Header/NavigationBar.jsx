
import logo1 from '../../assets/logo1.png'


import React, { useState } from 'react'
import {Collapse,Nav, NavItem, NavLink, Navbar,NavbarBrand,NavbarToggler} from 'reactstrap';



const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] =useState(false);
  const navToggle = () =>{
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div  className='main-div'>
      <Navbar  black expand='sm'>
          <NavbarBrand href="/"><img src={logo1} /></NavbarBrand>
      <NavbarToggler onClick={navToggle} />
          <Collapse navbar isOpen={isNavOpen}>
          <Nav className="me-auto item" navbar > 
            <NavItem>
              <a href="/" className='nav-link'>Home</a>
            </NavItem>  
            <NavItem>
              <a href="/about-details" className='nav-link'>About</a>
            </NavItem>   
            <NavItem>
              <a href="/book-online" className='nav-link'>Book Online</a>
            </NavItem>  
            <NavItem>
              <a href="/menu" className='nav-link'>1234-567-890</a>
            </NavItem>      
          </Nav>
          </Collapse>
          
     </Navbar>
    </div>
  );
};

export default NavigationBar