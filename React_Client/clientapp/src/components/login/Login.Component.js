import { Component } from 'react';
import LoginRender from './../../jsx/login/Login.Render.jsx';

class LoginComponent extends Component {
   username="";
   constructor(){
     super();
     this.render=LoginRender.bind(this);
   }

   onPasswordHandle(password){
     console.log(password);
   }
   onUserNameHandle(username) {
     console.log(username);
   }
}
export default LoginComponent;