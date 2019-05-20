import React, { Component } from 'react';

import './AppPrasad.css';


import Tamil from './components/Tamil';
import Home from './components/Home';
import About from './components/About';
import Places from './components/Places';
import Todo from './components/Todo';

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class AppPrasad extends Component
{

render()
{
return(
<Router>
   <div>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/tamil" component={Tamil}/>
    <Route exact path="/places" component={Places}/>
    <Route exact path="/todo" component={ Todo}/>
    <a href="http://localhost:3001/index">Call Nodejs </a>
</div>
  </Router>

)}}
