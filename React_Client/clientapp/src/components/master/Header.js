import { Component } from 'react';
import fetch from 'node-fetch';
import HeaderRender from './../../jsx/master/header.jsx';
import * as $ from 'jquery';

class HeaderComponent extends Component {
   constructor(props){
     super(props);
     this.render=HeaderRender.bind(this);
   }
}
export default HeaderComponent;