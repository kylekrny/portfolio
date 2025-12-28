import React, { Component } from 'react'
import JSONData from '../../data/content.json'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class Experience extends Component {


  resumeOpen (th) {
    window.open('https://drive.google.com/open?id=12t1CsOD_NILjajU-WCyJYK9GcRiNbXsn', '_blank')
  }

  render() {
    const card = (
      <div className='exp-card-container'>
      {JSONData.Content.map((data, index) => {
        return (
          <Fade delay={200 * index}>
          <div className="exp-card">
              <h4 className='exp-card-time'>{data.Time}</h4>
              <h6 className='exp-card-company'>{data.Head}</h6>
              <p className='exp-card-description'>{data.Description}</p>
          </div>
          </Fade>
        )
      })}
      </div>
    );

    return (
      <div id='experience'>
        <div id="experience-head">
          <Slide left delay={400}>
          <h5 id='exp-title-small'>Professional</h5>
          </Slide>
          <Slide right delay={400}>
          <h5 id='exp-title-large'>Synopsis</h5>
          </Slide>


        </div>
          {card}
      <div className="button-container">
        <button onClick={this.resumeOpen} id='resume-button'>Resume / CV</button>
      </div>
      </div>
    )
  }
};

export default Experience
