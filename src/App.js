import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import CardWrapper from "./components/CardWrapper";
import Header from "./components/Header";
import images from "./images.json";

class App extends Component {
  state = {
    images
  };

  pingImage = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
      <Header score={0} topScore={0}>Click the images to score points,<br></br> but don't click the same image twice!</Header>
      <CardWrapper>
        {this.state.images.map(image => (
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
