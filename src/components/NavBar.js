import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';




export function NavBar(props) {
  
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Seattle is Fun!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link className="nav-link" to="/homepage">Home</Link>
              </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/liked-locations">Liked Locations</Link>
              </Nav.Link>
              <Nav.Link href="#timeline">
              <Link className="nav-link" to="/timeline">Timeline</Link>
              </Nav.Link>
              <Nav.Link href="#timeline">
              <Link className="nav-link" to="/quiz">Quiz</Link>
              </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}
// href="#timeline