import { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import TopicsRender from './../jsx/topics.jsx';
class Topics extends Component {
  constructor({match}){
    super();
    this.render=TopicsRender.bind(this);
    this.match=match;
  }
}

export default Topics;