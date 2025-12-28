import React, { Component } from 'react'
import WorkCard from './workCard'
import Slide from 'react-reveal/Slide'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class Work extends Component {


  render() {
    return (
      <div id='work'>
        <h5 className='title-small work-title'>
          <Slide left cascade delay={200}>
          My
          </Slide>
          </h5>
        <h5 className='title-large work-title'>
          <Slide left cascade delay={200}>
            Work
          </Slide>
        </h5>
        <WorkCard/>
        <div className="work-footer">

            <p><a className='work-footer-text' href="/may-2020-resume.pdf" target='blank' rel='noopener norefferer'>Resume</a> /  <a className='work-footer-text' href="https://github.com/kyledkearney" target='blank' rel='noopener norefferer'>Github</a></p>
            
        </div>
      </div>
    )
  }
};

export default Work
