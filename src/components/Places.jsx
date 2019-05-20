import React, { Component } from 'react';
import './Places.css';
import CustomNavbar from './CustomNavbar';
import {Carousel,Image} from 'react-bootstrap';
import Form from './Form';
import Weather from './Weather';
import Titles from './Titles';
export default class Places extends Component
{
  state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  icon:undefined,
  error: undefined
}
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=6a728b121164179eee6727debc38c1f8`);
    const response = await api_call.json();
    if(city && country){
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })}
    else{
      this.setState({
    error: "Please enter the values..."
})}
    console.log(response);

  }
  render()
  {
return(
<div bgcolor="black">
  <CustomNavbar/>
  <h2> Welcome to the places page</h2>
  <p>This page will be extended to add places visited and their weather</p>
  <Titles/>
    <Form loadWeather={this.getWeather} />
    <Weather
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error} />

  <Carousel>
  <Carousel.Item>
    <Image src="assets/prasad.jpg" className="profile-pic1" roundedCircle></Image>
    <Carousel.Caption>
    <h3>Prasad</h3>
    <p> Born in Gobichettipalayam,Studied MCA, Working in TCS.Lives in Austin...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image src="assets/latha.jpg" className="profile-pic1" roundedCircle></Image>

    <Carousel.Caption>
    <h3>Latha</h3>
    <p> Born in Coimbatore,Studied Mphil,Lives in Austin...</p>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="assets/sanjiv.jpg" className="profile-pic1" roundedCircle></Image>

    <Carousel.Caption>
    <h3>Sanjiv</h3>
    <p> Born in Coimbatore,Studying 6th grade,Lives in Austin...</p>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="assets/shivaani.jpg" className="profile-pic1" roundedCircle></Image>

    <Carousel.Caption>
    <h3>Shivaani</h3>
    <p> Born in Coimbatore,Studying 1st grade,Lives in Austin...</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

)

  }
}
