import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import CardWrapper from "./components/CardWrapper";
import Header from "./components/Header";
import images from "./images.json";

class App extends Component {
  state = {
    lastClicked: [],
    score: 0,
    topScore: 0,
    headerMessage: "Click the images to score points, \n but don't click the same image twice!"
  };

  pingImage = id => {
    const pinged = id;
    if (this.state.lastClicked.some(element => (element === pinged))) {
      this.handleIncorrect();
    } else {
      this.setState({ 
        lastClicked: [...this.state.lastClicked, pinged], 
        score: this.state.score + 1,
        headerMessage: 'Correct!'
      });

        if (this.state.score >= this.state.topScore) {
          this.setState({
            topScore: this.state.score + 1
          });
        }
      this.shuffleImages();
    }
  };

  shuffleImages = () => {
    images.sort(() => Math.random() - 0.5);
  };

  handleIncorrect = () => {
    this.shuffleImages();
    this.setState({ lastClicked: [], score: 0, headerMessage: 'Wrong!'});
  };

  render() {
    return (
      <>
      <Header score={this.state.score} topScore={this.state.topScore} 
      message={this.state.headerMessage}
      />
      <CardWrapper>
        {images.map(image => (
          <ImageCard
            pingImage={this.pingImage}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </CardWrapper>
      </>
    );
  }
}

export default App;
