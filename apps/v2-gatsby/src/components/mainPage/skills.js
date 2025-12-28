import React, { Component } from 'react'
import SkillDisplay from './skills/skillDisplay'
import Flip from 'react-reveal/Flip';

export default class Skills extends Component {

  render() {
    
    return (
      <div id="skills">
        <Flip top>
          <h5 className='title-large skills-title'>Skills</h5>
        </Flip>
        <Flip bottom>
          <h5 className='skills-title-small'>To pay the bills</h5>
        </Flip>
    
          <SkillDisplay/>

      </div>
    )
  }
};


