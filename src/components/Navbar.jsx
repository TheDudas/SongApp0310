// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={NavLink} to="/">SongApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/songs">Songs</Nav.Link>
        <Nav.Link as={NavLink} to="/add">Add Song</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Navigation;

