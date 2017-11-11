import React from 'react';
import { Input, Password, Form} from './../../common/components/Controls.js';
function LoginRender(){

	 return (
         <Form>
             <div className="form-group">
                 <label htmlFor="email">Email:</label>
                 <Input name="username" className="form-control" required="true" content={this.username} onChange={this.onUserNameHandle.bind(this)}></Input>
             </div>
             <div className="form-group">
                 <label htmlFor="pwd">Password:</label>
                 <Password name="password" className="form-control" onChange={this.onPasswordHandle.bind(this)}>hello</Password>
             </div>
             <div className="checkbox">
                 <label><input type="checkbox" name="remember" /> Remember me</label>
             </div>
             <button type="submit" className="btn btn-default">Submit</button>
         </Form>
    );
}


export default LoginRender;