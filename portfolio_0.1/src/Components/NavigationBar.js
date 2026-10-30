import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const NavigationBar = () => {

  const [collapsed, setCollapsed] = useState(false)
  const toggleNavbar = ()=>{
    setCollapsed(!collapsed)
  }


  return (
    <div className='navigation'>
      
      <Navbar  expand="sm">
          <NavbarBrand href="/" style={{ color: 'wheat'}}>Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='me-auto bg-light' />
        <Collapse isOpen={collapsed} navbar>
       <Nav navbar style={{margin: 'auto'}}>
            <NavItem>
              <NavLink href="/about/" className='nav-link'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects"> Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/skills"> Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact"> Contact</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
      </Navbar>
       
    </div>
  )
}

export default NavigationBar