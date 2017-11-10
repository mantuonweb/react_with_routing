import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class SelectTopic extends Component {
  render() {
    return (
      <h3>Please select a topic.</h3>
    );
  }
}
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
function TopicsRender(){
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
export default TopicsRender;