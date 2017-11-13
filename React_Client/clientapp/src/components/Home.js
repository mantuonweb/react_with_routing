import React, { Component } from 'react';
import HeaderComponent from './../components/master/Header.js';
class Home extends Component {
   render() {
    return (
       <div>
        <HeaderComponent>Header</HeaderComponent>
        <h2>Home</h2>
      </div>
    );
  }
}
export default Home;