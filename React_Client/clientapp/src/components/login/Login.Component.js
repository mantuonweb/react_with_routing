import { Component } from 'react';
import fetch from 'node-fetch';
import LoginRender from './../../jsx/login/Login.Render.jsx';
import * as $ from 'jquery';

class LoginComponent extends Component {
   
   constructor(){
     super();
     this.state = {
       username:"",
       password:""
     };
     this.render=LoginRender.bind(this);
   }

   onPasswordHandle(password){
     this.password = password;
     this.setState({ password: password})
   }
   onUserNameHandle(username) {
     this.username=username;
     this.setState({ username: username})
   }
   onFormSubmit(e){
     // //console.log(e,'login component',this.username,this.state);
     // fetch('http://localhost:5000/login',{ 
     //     method: 'post',
     //     data: JSON.stringify(this.state),
     //     headers: new Headers({ 'Content-Type': 'application/json', 'Data-Type': 'application/json' }),
     // });
     $.ajax({
      url:'http://localhost:5000/login',
      method:'post',
      data:JSON.stringify(this.state),
      contentType: 'application/json',
      dataType:'application/json'
     })
   }
}
export default LoginComponent;