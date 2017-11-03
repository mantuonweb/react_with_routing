import React, { Component } from 'react';
//https://reacttraining.com/react-router/web/example/basic
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
  render() {
    return (
       <div>
        <h2>About</h2>
       </div>
    );
  }
}
class SelectTopic extends Component {
  render() {
    return (
      <h3>Please select a topic.</h3>
    );
  }
}
class Topics extends Component {
  constructor({match}){
    super();
    this.match=match;
  }
  render() {
    return (
      <div>
          <h2>Topics</h2>
          <ul>
            <li>
              <Link to={`${this.match.url}/rendering`}>
                Rendering with React
              </Link>
            </li>
            <li>
              <Link to={`${this.match.url}/components`}>
                Components
              </Link>
            </li>
            <li>
              <Link to={`${this.match.url}/props-v-state`}>
                Props v. State
              </Link>
            </li>
          </ul>

          <Route path={`${this.match.url}/:topicId`} component={Topic}/>
          <Route exact path={this.match.url} component={SelectTopic}/>
    </div>
    );
  }
}


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

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
