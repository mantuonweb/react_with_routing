import React from 'react';
import Topics from './../../components/Topics.js';
import About from './../../components/About.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
console.log(About,Topics);
function MainRender(){
	 return (
     	<div> 
     		{this.props.children} 
     		<Route path="/about" component={About}/>
 		 	<Route path="/topics" component={Topics}/>
     	</div>
     	 
     );
}
export default MainRender;