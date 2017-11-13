import React, { Component } from 'react';
import HeaderComponent from './../components/master/Header.js';
import * as $ from 'jquery';
class Home extends Component {
   users=[];
   constructor(props){
   	 super(props);
   	 this.state = {
      users:[]
     };
   	 this.getUser();
   }
   render() {
    return (
       <div>
        <h2>Home</h2>
        {JSON.stringify(this.state.users)}
      </div>
    );
  }
  getUser(){
  	 $.get("http://www.json-generator.com/api/json/get/cqErtYhxYO?indent=2").then((res)=>{
  	 	console.log(res);
  	 	this.setState({ users: res});
  	 });
  }
}
export default Home;