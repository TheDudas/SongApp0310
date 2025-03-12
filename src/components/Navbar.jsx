// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// Imports link functions and navbar container from bootstrap

// navigation of website for navbar. what to do when collapsed, links to other pages. 
// all within a container.
const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Song App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/songs">Songs</Nav.Link>
              <Nav.Link as={Link} to="/add">Add Song</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link> {/* New Link */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Navigation;