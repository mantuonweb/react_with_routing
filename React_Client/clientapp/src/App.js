import React, { Component } from 'react';
//https://reacttraining.com/react-router/web/example/basic
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
//https://stackoverflow.com/questions/21066581/react-js-how-to-decouple-jsx-out-of-javascript
//

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AboutRender from './jsx/about.jsx';
import TopicsRender from './jsx/topics.jsx';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    return (
       <div>
        <h2>Home</h2>
      </div>
    );
  }
}
class About extends Component {
   constructor(){
     super();
     this.render=AboutRender.bind(this);
   }

}

class Topics extends Component {
  constructor({match}){
    super();
    this.render=TopicsRender.bind(this);
    this.match=match;
  }
 
}



class App extends Component {
  render() {
   return (
       <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    );
  }
}

export default App;
