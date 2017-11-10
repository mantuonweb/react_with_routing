import { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import AboutRender from './../jsx/about.jsx';
class About extends Component {
   constructor(){
     super();
     this.render=AboutRender.bind(this);
   }
}
export default About;