import React, { Component } from 'react';
import Image from './components/image';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper z-depth-3">
            <div className="brand-logo center">Clicky game!</div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="navButton">Score</li>
              <li className="navButton">Top score</li>
              <li className="navButton">Games played</li>
            </ul>
          </div>
        </nav>
        <div className="container header">
          <p>Start the game by clicking on the images!<br/>
            BUT! Click each image only once - clicking the same image starts the game over!</p> 
            
            <div className="imageContainer container">images go here
              <Image/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
