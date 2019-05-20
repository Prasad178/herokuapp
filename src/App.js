import React, { Component } from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prasad",
    };
  }
updateName()
{
  this.setState(
    {
  name:this.refs.enterStringInput.value,
});
}
buttonAlert()
{
  alert("Hello "+this.refs.enterStringInput.value+" how are you?");
};

aboutLatha()
{
alert("Redirect to Latha Page");
};
aboutSanjiv()
{
alert("Redirect to Sanjiv Page");
};

aboutShivaani()
{
alert("Redirect to Shivaani Page");
};
componentWillUpdate() {
  console.log("called componentWillUpdate")
}
componentWillMount() {
  console.log("called componentWillMount")
   let name;
   if (this.props.age >=40 && this.props.age<=41) {
     name = 'Prasad';
   } else if (this.props.age >= 30 && this.props.age <40) {
     name = 'Latha';
   } else if (this.props.age >10 && this.props.age <=20) {
       name = 'Sanjiv';
     } else if (this.props.age <=10) {
         name = 'Shivaani';
   } else {
     name = 'Therila';
   }
   this.setState({ name });
 }


  render() {
    return (
      <div id= "root "className="App">
        <header className="App-header">
        <ButtonToolbar>
        <Button variant="outline-primary">Primary</Button>
          <Button variant="secondary">Primary</Button>
            <Button variant="success">Primary</Button>
            </ButtonToolbar>
        <p> learning props in react-{this.props.age}</p>

          <p>
            First page in react- {this.state.name}.
          </p>
          <input type="text"  ref="enterStringInput"
onChange={this.updateName.bind(this)}></input>
          <button name="Click" ref="buttonClick"
onClick={this.buttonAlert.bind(this)}>Click to Alert</button>

          <ol>
          <li>
            <a href="/latha">About Latha</a>
          </li>
          <li>
            <a  to="/sanjiv">About Sanjiv</a>
          </li>
          <li>
               <a to="/shivaani">About Shivaani</a>
          </li>
          </ol>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header>
      </div>
    );
  }
}
App.defaultProps ={age:'9'};
export default App;
