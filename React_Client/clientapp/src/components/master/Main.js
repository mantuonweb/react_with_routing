import { Component } from 'react';
import fetch from 'node-fetch';
import MainRender from './../../jsx/master/main.jsx';
import * as $ from 'jquery';

class MainComponent extends Component {
   constructor(props){
     super(props);
     this.render=MainRender.bind(this);
   }
}
export default MainComponent;