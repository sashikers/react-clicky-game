import React, { Component } from 'react';
import ImageListItem from './components/imageListItem';
import {ImageList} from "./components/imageList";
import imageSeed from "./components/imageSeed";
// import logo from './logo.svg';
import './App.css';

const images = imageSeed;
let matches = [];
let correctGuesses = 0;
let topScore = 0;
let message = "Start clicking!";

const shuffleImages = () => {
  // shuffle images
  images.sort(function(a,b) {return 0.5 - Math.random()});

};
const newGame = () => {
  // resets variables
  matches = [];
  correctGuesses  = 0;
  shuffleImages();
};

class App extends Component {
  state = {
    message: message,
    topScore: topScore,
    correctGuesses: correctGuesses,
    images: images,
  };

  handleClick = (name) => {
    console.log("handleClick", name);

    // if the guess is a new guess
    if (matches.indexOf(name) === -1) {
      // add name to the array of guessed queens
      matches.push(name);
      // increment guess counter
      correctGuesses++;
      // update visual div of correct guesses and message
      this.setState({correctGuesses: correctGuesses});
      this.setState({message: "Good guess! Now click an image you haven't clicked before."});

      // add if statement to update top score 
      if (correctGuesses > topScore) {
        topScore = correctGuesses;
        this.setState({message: "Good guess! And you've set the high score! Now click an image you haven't clicked before."});
      }

      shuffleImages();
      this.setState({images: images});
  
    // set up condition for losing the game
    } else if (correctGuesses < 11) {
      console.log("already clicked");

      // updates state
      this.setState({message: "You already clicked that one! Start clicking to begin a new game."});
      newGame();
      this.setState({images: images});
      
    } else {
      console.log("You win! Start clickiing to begin a new game.");
      newGame();
      this.setState({images: images});
    }
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
              <li className="score">Current score: {correctGuesses}</li>
              <li className="score">Top score: {topScore}</li>
            </ul>
            <h5>{this.state.message}</h5>
            <hr/>
            
            <div className="imageContainer container">
              <ImageList>
                {this.state.images.map(image => {
                  return (
                    <ImageListItem
                      handleClick={this.handleClick}
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
