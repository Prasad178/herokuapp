
import CustomNavbar from './CustomNavbar';
import './ToDo.css';
import React, { Component } from 'react';
import { Jumbotron,Container} from 'react-bootstrap';

export default class Todo extends Component
{
  render()
  {
return(
  <Container>
  <CustomNavbar/>
  <Jumbotron>
    <h2> Welcome to Todo page</h2>
    <p>This Page is for Todo list app</p>
  </Jumbotron>
  </Container>
)

  }
}
