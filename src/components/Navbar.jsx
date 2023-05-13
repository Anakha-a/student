import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/form">Employee Form</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
