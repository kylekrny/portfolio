import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade'
import ColorChange from './colorChange'
class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showHeader: true,
      showAnimation: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
      showHeader: !prevState.showHeader,
    }));
  }

  render() {
    const menu = (
      <div id='menu'>
        <div id='menu-header'>
        <p className='header-text'><button className='button-reset menu-button' onClick={this.handleClick}>Close</button></p>
        </div>
        <div className='menu-main'>
          <nav id='menu-nav'>
            <Link to="landing" className='menu-item' spy={true} smooth={true} offset={-200} duration= {1400} onClick={this.handleClick}>Home</Link>
            <Link to="about" className='menu-item' spy={true} smooth={true} offset={-50} duration= {1400} onClick={this.handleClick}>About</Link>
            <Link to="work" className='menu-item' spy={true} smooth={true} offset={-70} duration= {1400} onClick={this.handleClick}>Work</Link>
            <Link to="skills" className='menu-item' spy={true} smooth={true} offset={-20} duration= {1400} onClick={this.handleClick}>Skills</Link>
            {/* <Link to="work" className='menu-item' spy={true} smooth={true} offset={-90} duration= {800} onClick={this.handleClick}>Contact</Link> */}
            
            {/* <div id='mode-button-container'>
            <button id='mode-button'>Dark Mode</button>
            </div> */}
          <div className='social-row'>
          <a href="Mailto:hello@kyleswork.com"><FontAwesomeIcon icon={["far", "envelope"]} className='social-icon'/></a>
          <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/dev.kyle/"><FontAwesomeIcon icon={["fab", "instagram"]} className='social-icon'/></a>
          <a target="_blank" rel='noopener noreferrer' href="https://github.com/kyledkearney"><FontAwesomeIcon icon={["fab", "github"]} className='social-icon'/></a>
          {/* <a href=""><FontAwesomeIcon icon={["fab", "behance"]} className='social-icon' style={{color:"#000000"}} /></a> */}
          </div>
          </nav>
          <ColorChange/>
        </div>
        <div id='menu-footer'>
          <p id="menu-footer-brand">Kyle Kearney</p>
      </div>
    </div>
    )

    const header = (
        <>
        <Fade duration={3000} top opposite>
        <p className='header-text' id='nav-link'><button className='button-reset menu-button' onClick={this.handleClick}>Menu</button></p>
        </Fade>
        </>
    )
    return (
      <div id='head-main-container'>
        <div id='header-container'>
        <Fade duration={3000} top opposite>
          <p className='header-text desktop' id='header-brand'>Front End Web Developer</p>
        </Fade>
        {this.state.showHeader ? header : ''}
        {/* <div className="header-nav">
          <Link to="about" className='header-nav-item' spy={true} smooth={true} offset={-200} duration= {800} onClick={this.handleClick}>About</Link>
          <Link to="work" className='header-nav-item' spy={true} smooth={true} offset={-70} duration= {800} onClick={this.handleClick}>Work</Link>
          <Link to="skills" className='header-nav-item' spy={true} smooth={true} offset={-70} duration= {800} onClick={this.handleClick}>Skills</Link>
          <Link to="contact" className='header-nav-item' spy={true} smooth={true} offset={-90} duration= {800} onClick={this.handleClick}>Contact</Link>
        </div> */}
        </div>
        <Fade top exit opposite when={this.state.showMenu}>
        {this.state.showMenu ? menu : ''}
        </Fade>
      </div>

       
    
    )
  }
};

export default Menu
