import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

class Brief extends Component {



  render() {

    return (
      <div id='brief-container'>
        <Fade  duration={3000} delay={1000}>
          <p id="brief">
          Hello! My name is Kyle Kearney, I love to design and develop great user experiences. I have a simple philosophy behind my work. Design for people, develop for tomorrow.
          </p>
        </Fade>
      </div>
    )
  }
};

export default Brief
