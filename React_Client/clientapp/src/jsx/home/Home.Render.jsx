import React from 'react';

function RenderRow(props){
    return (<tr>
                <td>{props.user.name}</td>
                <td>{props.user.email}</td>
                <td>{props.user.company}</td>
              </tr>);
}

function HomeRender(){
    //https://jsbin.com/wahuzo/edit?html,js,console,output
	 return (
          <div>
            <h2>Home</h2>
            <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
               <RenderTable users={this.state.users}></RenderTable>
            </tbody>
          </table>
         
         </div>
    );
}
function RenderTable(props){
    return props.users.map((user,i)=>{
        return (<RenderRow key={i} user={user}></RenderRow>);
    });
}
export default HomeRender;