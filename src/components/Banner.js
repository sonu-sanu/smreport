

import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
 
import Frame from "./frame";

import {  Link } from "react-router-dom";
function Banner()
{

  return(

  <>
    <Navbar bg="info" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Smart Meter Reporting and Managing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <LinkContainer to="/frame">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></>
  )
}

export default Banner;
