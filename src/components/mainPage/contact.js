import React, { Component } from 'react'
import Image from "../image"
import Fade from 'react-reveal/Fade';

class Contact extends Component {

  

  render() {
    
    return (
      <div id='about'>
        <div className="about-head">
            <h5 id='about-head'>
              <Fade delay={200} left duration={2000}>
              Contact
              </Fade>
              </h5>
        </div>
    </div>
       
    )
  }
};

export default Contact
