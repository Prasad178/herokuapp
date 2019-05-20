import React, { Component } from 'react';
import './Home.css';
import { Jumbotron, Container, Row,Col,Image} from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
export default class Home extends Component
{

  render()
  {
return(
<Container>
<CustomNavbar/>
<Jumbotron>
  <h2> Welcome to my react first website</h2>
  <p>This website will be extended to add places,photos,videos,tamil pages</p>
</Jumbotron>
<Row className="show-grid text-center">
<Col className="person-wrapper">
<Image src="assets/prasad.jpg" className="profile-pic" roundedCircle></Image>
<h3>Prasad</h3>
<p> Born in Gobichettipalayam,Studied MCA, Working in TCS.Lives in Austin...</p>
</Col>
<Col className="person-wrapper">
<Image src="assets/latha.jpg" className="profile-pic" roundedCircle></Image>
<h3>Latha</h3>
<p> Born in Coimbatore,Studied Mphil,Lives in Austin...</p>
</Col>
<Col className="person-wrapper">
<Image src="assets/sanjiv.jpg" className="profile-pic" roundedCircle></Image>
<h3>Sanjiv</h3>
<p> Born in Coimbatore,Studying 6th grade,Lives in Austin...</p>
</Col>
<Col className="person-wrapper">
<Image src="assets/shivaani.jpg" className="profile-pic" roundedCircle></Image>
<h3>Shivaani</h3>
<p> Born in Coimbatore,Studying 1st grade,Lives in Austin...</p>
</Col>
</Row>
</Container>

)

  }
}
