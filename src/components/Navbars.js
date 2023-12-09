import Container from 'react-bootstrap/Container';
import {Nav ,Navbar ,NavDropdown , Collapse } from 'react-bootstrap';
import './NavStyle.css' ;
import logos  from './../photos/logos.png' ;
import FAQ from '../FAQ-Folder/FAQ.js' ;

export default function Navbars() 
{
  return (
     <>
      <div className='Pagetitle' > DIABETES CLINIC MANAGEMENT SYSTEM  </div>
      <Navbar expand="lg" className="bg-body-tertiary">
       <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='whitename' />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#Home" >Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown" className='allnav'>
              <NavDropdown.Item href="#action/3.1">Doctor </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Nurse </NavDropdown.Item>

            </NavDropdown>
            {/*  */}
            <NavDropdown title="Services" id="basic-nav-dropdown" className='allnav'>
            <NavDropdown.Item href="#action/3.1">Appointment</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Add User </NavDropdown.Item>
              <NavDropdown.Item href="#FAG">FAQ'S </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Prescription</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Billing</NavDropdown.Item>  
              <NavDropdown.Item href="#action/3.1">Chamber</NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <NavDropdown title="Blog" id="basic-nav-dropdown" className='allnav'>
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>  
              <NavDropdown.Item href="#action/3.1">blog Details</NavDropdown.Item>  
            </NavDropdown>
            <Nav.Link href="#link" >Search</Nav.Link>
            <Nav.Link href="#link" >Contact Us</Nav.Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown"   className='allnav' >
            <img src={logos} className='imgstyle' />
              <NavDropdown.Item href="#action/3.1">    <a href='#' >   Login / Register </a>  </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"> <a href='#'>Profile </a></NavDropdown.Item> 
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/*  component */}
    <FAQ />
  
    </>
  );
}
