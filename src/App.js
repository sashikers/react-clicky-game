import React, { Component } from 'react';
import {ImageListItem} from './components/imageListItem';
import {ImageList} from "./components/imageList";
import imageSeed from "./components/imageSeed";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    images: imageSeed,
  };

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper z-depth-3">
            <div className="brand-logo center">Clicky game!</div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="navButton"><a href="https://github.com/sashikers/react-clicky-game">GitHub</a></li>
              <li className="navButton"><a href="https://sashikers.github.io/sasha-bessonova/">Sasha Bessonova</a></li>
              
            </ul>
          </div>
        </nav>
        <div className="container mainContainer">
          <p>Start the game by clicking on the images!<br/>
            BUT! Click each image only once - clicking the same image starts the game over!</p> 

            <ul className="scoreboard container">
              <li className="currentScore">Current score</li>
              <li className="highestScore">Highest score</li>
              <li className="gamesPlayed">Games played</li> <hr/>

            </ul>
            
            <div className="imageContainer container">images go here
              <ImageList>
                {this.state.images.map(image => {
                  return (
                    <ImageListItem
                      key={image.name}
                      name={image.name}
                      thumbnail={image.thumbnail}
                    />
                  )
                })}
              </ImageList>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
