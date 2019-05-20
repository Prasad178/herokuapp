import React, { Component } from 'react';
import './About.css';
import CustomNavbar from './CustomNavbar';

export default class About extends Component

{

  render()
  {
return(
<div>
 <CustomNavbar/>

 <h1>Intro to Node and MongoDB</h1>

 <form action="/addName" method="POST">
  <input type="text" placeholder="firstName" name="firstName"/>
  <input type="text" placeholder="lastName" name="lastName"/>
  <button type="submit">Submit</button>
 </form>
</div>

)

  }
}
