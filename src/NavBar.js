import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';


export function NavBar(props) {
    const { title } = props
  
    return (
      // <div>
      //   <h1 className="my-0 py-0 bg-light">Quiz - What locations might suit you best?</h1>
  
      //   <nav className="navbar navbar-expand-lg bg-light navbar-light">
      //     <div className="container-fluid">
      //       <a className="navbar-brand" href="#">Seattle is FUN!</a>
      //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      //         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //         <span className="navbar-toggler-icon"></span>
      //       </button>+
      //       <div className="collapse navbar-collapse" id="navbarNav">
      //         <ul className="navbar-nav">
      //           <li className="nav-item">
      //             <a className="nav-link active" aria-current="page" href="index.html">Home</a>
      //           </li>
      //           <li className="nav-item">
      //             <a className="nav-link" href="quiz.html">Quiz</a>
      //           </li>
      //           <li className="nav-item">
      //             <a className="nav-link" href="timeline.html">Timeline</a>
      //           </li>
      //           <li className="nav-item">
      //             <a className="nav-link" href="liked-locations.html">Liked Locations</a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </div>
      <CollapsibleExample title="Travel Quiz"/>
      );
  }


function CollapsibleExample(props) {
  const title = props.title
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}