import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';
import About from "../components/mainPage/about"
import Brief from "../components/mainPage/brief"
// import ColorChange from '../components/mainPage/colorChange'
import Work from "../components/mainPage/work"
// import Contact from '../components/mainPage/contact'
import Skills from '../components/mainPage/skills'



ReactGA.initialize('UA-164183008-1');


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landing">
      <Fade duration={3000} left opposite>
        <h1 id='landing-text-top' className='color-text'>Kyle</h1>
      </Fade>
      <Fade duration={3000} right opposite>
        <h1 id='landing-text-bottom' className='color-text'>Kearney</h1>
      </Fade>
    </div>
    <div className="container">
        <Brief/>
        <About/>
        <Work/>
        {/* <ColorChange/> */}
        <Skills/>
        {/* <Contact/> */}
    </div>
  </Layout>
)

export default IndexPage
