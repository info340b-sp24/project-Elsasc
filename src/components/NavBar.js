import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import userEvent from '@testing-library/user-event';




export function NavBar(props) {
  const currentUser = props.currentUser;

  const handleLogOut = (event) => {
    //sign out here
    console.log("LOGGED OUT")
    signOut(getAuth());
  }

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Seattle is Fun!</Navbar.Brand>
          <Nav>
            {currentUser.userId !== null &&
            <Link className="nav-link"> {"User: " + currentUser.userName} </Link>
            }
            {currentUser.userId === null &&
            <Link className="nav-link" to="/login"> Login </Link>
            }
          </Nav>
          <Nav>
            <Link className="nav-link" onClick={handleLogOut}> Logout </Link>  
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav>
                <Link className="nav-link" to="/homepage">Home</Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/liked-locations">Liked Locations</Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/timeline">Timeline</Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/quiz">Quiz</Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
