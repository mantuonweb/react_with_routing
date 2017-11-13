import React from 'react';
import { Input, Password, Form} from './../../common/components/Controls.js';
function LoginRender(){
    //https://jsbin.com/wahuzo/edit?html,js,console,output
	 return (
         <div className="wrapper">
                <div className="form-signin">
                 <Form onSubmit={this.onFormSubmit.bind(this)}>
                     <h2 className="form-signin-heading">Please login</h2>
                     <div className={`form-group ${this.state.username?'':'has-error'}`}>
                         <label htmlFor="email" >Email:</label>
                         <Input ref="userName" name="username" className="form-control" required="true" content={this.username} onChange={this.onUserNameHandle.bind(this)}></Input>
                     </div>
                     <div className={`form-group ${this.state.password ? '' : 'has-error'}`}>
                         <label htmlFor="pwd">Password:</label>
                         <Password ref="passWord" name="password" className="form-control" onChange={this.onPasswordHandle.bind(this)}>hello</Password>
                     </div>
                     <button type="submit" className="btn btn-default">Submit</button>
                 </Form>
                 </div>
         </div>
    );
}
export default LoginRender;