
import React from "react"
import PropTypes from "prop-types"
import Menu from './mainPage/menu'
// import Footer from "../components/mainPage/footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'
import "./layout.css"
library.add(faInstagram, faGithub, faBehance, faEnvelope)


const Layout = ({ children }) => {



  return (
    <>

    <Menu/>
    <>
      {children}
    </>
    {/* <Footer/> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
