//import React, { Component } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Topics from './../components/Topics.js';
import About from './../components/About.js';
import Home from './../components/Home.js';
import LoginComponent from './../components/login/Login.Component.js';

function AppRender(){
	 return (
       <Router>
        <div>
          <ul>
            <li><Link to="/">Login</Link></li>
             <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={LoginComponent}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    );
}
export default AppRender;