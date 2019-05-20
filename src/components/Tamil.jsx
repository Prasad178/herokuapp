import React, { Component } from 'react';
import './Tamil.css';
import CustomNavbar from './CustomNavbar';
import { Jumbotron, Container} from 'react-bootstrap';
export default class Tamil extends Component
{

  render()
  {
return(
  <Container>
  <CustomNavbar/>
  <Jumbotron>
    <h2> Welcome to tamil page</h2>
    <p>This page  will be extended to add tamil fonts,favorite books,musics, movie links,blogs</p>
</Jumbotron>
<audio src="./assets/PettaiTheme.mp3" autoplay="autoplay">Play</audio>
  </Container>

)

  }
}
