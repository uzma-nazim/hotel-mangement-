import React, { useEffect } from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import logo from "../../assests/images/logo.png"


import "../../styles/home.css"

const Navbars = () => {
  const userCheck = localStorage.getItem("user")
  const adminCheck = localStorage.getItem("admin")
  const navigate= useNavigate()
  const logout = ()=>{
    localStorage.clear()
    navigate("/")

  }
  const logoutadmin = ()=>{
    localStorage.removeItem("admin")
    navigate("/")

  }

  return (
    <>
     {  !userCheck? <Navbar collapseOnSelect expand="lg" bg="dark" className='navBG' variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} width="120pxs" alt="" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About </Nav.Link>
              <Nav.Link href="#pricing">Faqs</Nav.Link>

            </Nav>
            <Nav>
           



              {adminCheck? <><Nav.Link href="/adminpanel">Admin Panel</Nav.Link><Nav.Link href="" onClick={logoutadmin}>logout</Nav.Link></> :<>
              
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
                Sign up
              </Nav.Link>
              <Nav.Link href="/adminSignup">Admin Sign Up</Nav.Link>
              

              </>}
              


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>:<Navbar collapseOnSelect expand="lg" bg="dark" className='navBG' variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} width="120pxs" alt="" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About </Nav.Link>
              <Nav.Link href="#pricing">Faqs</Nav.Link>

            </Nav>
            <Nav>
           
              <Nav.Link href="/userdashboard"> <CgProfile style={{ marginTop: "-5px " }} /> Profile</Nav.Link>
              <Nav.Link href="" onClick={logout} > Logout</Nav.Link>


              


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>}
    </>
  )
}

export default Navbars