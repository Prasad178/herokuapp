import React, { Component } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import './CustomNavbar.css';
export default class CustomNavbar extends Component
{

  render()
  {
return(
  <Navbar bg="light">
    <Navbar.Brand href="#home" className="navbar-brand"><h2 center>Prasad</h2></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav>
     <Nav.Link href="./home"> <Button bsStyle="primary">Home</Button></Nav.Link>
     <Nav.Link href="./places"><Button bsStyle="primary">Places</Button></Nav.Link>
     <Nav.Link href="./about"><Button bsStyle="primary">Cooking</Button></Nav.Link>
       <Nav.Link href="./todo"><Button bsStyle="primary">Todo</Button></Nav.Link>
     <Nav.Link href="./tamil"><Button bsStyle="primary">Tamil background,audio</Button></Nav.Link>
     </Nav>
    </Navbar.Collapse>
  </Navbar>

)

  }
}
