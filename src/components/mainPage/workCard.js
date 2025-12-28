import React, { Component } from 'react'
import JSONData from '../../data/content.json'
import Fade from 'react-reveal/Fade';

export default class WorkCard extends Component {


  constructor(props) {
    super(props);
    this.state = {
     activeOption: null
    };
  }




  renderLogo = (data) => {
    return (
      <div className="logo-container">
        {data.Title2 ? <h1 className='work-card-logo'>{data.Title}<span className={data.Class2}>{data.Title2}</span></h1> :  <h1 className='work-card-logo'>{data.Title}</h1>}
      </div>
    )
  }


  render() {
    const workData = JSONData.MyWorkContent



    return (
      <div className='work-card-container'>
          {workData.map((data, index) => {
      return (
        <Fade delay={300 * index} key={data.Class}>
        <a key={index} href={data.URL} target='_blank' rel="noopener noreferrer">
          <div className={`${data.Class} work-card`} key={data.Class} id={data.Class}>
              {this.renderLogo(data)} 
          </div>
        </a>
        </Fade>
      )})}

      </div>
    )
  }
};


