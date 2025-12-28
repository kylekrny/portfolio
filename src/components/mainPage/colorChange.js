import React, { Component } from 'react'


export default class ColorChange extends Component {


  constructor(props) {
    super(props);
    this.state = {
      lightMode : null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  

    handleClick() {
      this.setState(prevState => ({
        lightMode: !prevState.lightMode,
        
      }));

      document.body.className = this.state.lightMode ? 'body-white' : 'body-black'
      
    }



  render() {


    
      const darkMode = (
        <button className='color-button' onClick={this.handleClick}>Dark Mode</button>
      )
    

    const lightMode = (
        <button className='color-button' onClick={this.handleClick}>Light Mode</button>
      )
    
    

    return (

    <div className='color-switch-container'>
      {this.state.lightMode ? lightMode : darkMode}
    </div>

    )
  }
};

