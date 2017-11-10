import { Component } from 'react';
//https://reacttraining.com/react-router/web/example/basic
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
//https://stackoverflow.com/questions/21066581/react-js-how-to-decouple-jsx-out-of-javascript
//
// import logo from './logo.svg';
import AppRender from './jsx/app.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.render=AppRender.bind(this);
  }
}

export default App;
