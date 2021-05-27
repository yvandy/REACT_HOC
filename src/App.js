import React, { Component } from 'react';
import './App.css';
// import Parent from './Parent';
import Home from './HOC/Home';

class App extends Component {


  render() {
    return (

      <React.Fragment>
        {/* <Parent /> */}
        <Home status="coder" />
      </React.Fragment>


    )
  }
}


export default App;
