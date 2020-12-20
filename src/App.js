import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';

class App extends Component {
  render () {
return(
  <div className="App">
    <Greet name="Bruce" country="BD"/>
    <Greet name="Clark" country= "CD"/>
    <Greet name="Clark" country= "CD"/>
    <Greet name="Clark" country= "CD"/>
    <Greet name="Clark" country= "CD"/>
  
  </div>
);

  }

}

export default App;
