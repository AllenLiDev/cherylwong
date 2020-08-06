import React from 'react';
import "./ImageHover.css";
import Hero from './Hero.jpg';

class ImageHover extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={Hero} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
      </div>
    );
  }
}

export default ImageHover;
