import { Component } from 'react';
import LoginRender from './../../jsx/login/Login.Render.jsx';

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
     console.log(username,this.refs);
   }
   onFormSubmit(e){
     console.log(e,'login component',this.username);
   }
}
export default LoginComponent;