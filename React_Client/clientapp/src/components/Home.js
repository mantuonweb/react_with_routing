import React, { Component } from 'react';
import HeaderComponent from './../components/master/Header.js';
import * as $ from 'jquery';
import HomeRender from './../jsx/home/Home.Render.jsx';
class Home extends Component {
    users=[];
    constructor(props){
   	 super(props);
   	 this.state = {
      users:[]
     };
     this.render=HomeRender.bind(this);
   	 this.getUser();
    }
 
	getUser(){
	  	 $.get("http://www.json-generator.com/api/json/get/cjUentNwte?indent=2").then((res)=>{
	  	 	console.log(res);
	  	 	this.setState({ users: res});
	  	 });
	}
	
}
export default Home;