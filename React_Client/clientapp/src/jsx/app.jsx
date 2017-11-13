//import React, { Component } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './../components/Home.js';
import LoginComponent from './../components/login/Login.Component.js';
import MainComponent from './../components/master/Main.js';
import HeaderComponent from './../components/master/Header.js';


function AppRender(){
	 return (
       <Router>
        <div>
          <MainComponent>
              <HeaderComponent>Header</HeaderComponent>
              <Route exact path="/" component={LoginComponent}/>
              <Route path="/main" component={Home}/>
          </MainComponent>
        </div>
      </Router>
    );
}
export default AppRender;