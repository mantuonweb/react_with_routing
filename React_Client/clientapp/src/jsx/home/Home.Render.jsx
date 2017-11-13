import React from 'react';
function RenderTable(props){
    let rows=[];
    if(props && props.users.length){
        for (var i = 0; i < props.users.length; i++) {
            rows.push(<RenderRow user={props.users[i]}></RenderRow>)
        }
    }
    
    return rows;
}
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
export default HomeRender;