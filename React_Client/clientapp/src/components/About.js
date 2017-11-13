import { Component } from 'react';
import AboutRender from './../jsx/about.jsx';
class About extends Component {
   constructor(){
     super();
     this.render=AboutRender.bind(this);
   }
}
export default About;