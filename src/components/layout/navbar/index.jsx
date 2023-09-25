import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Code, Feather, Star, GitHub, BookOpen, Key, Linkedin, Mail } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <Star className="align-middle"/> <span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/research" className="lined-link" activeClassName="active"> <Key /> <span> Research </span> </Link></li>  
              <li><Link to="/education" className="lined-link" activeClassName="active"> <BookOpen /> <span> Education </span> </Link></li>  
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Experience </span> </Link></li>  
              <li><Link to="/repositories" className="lined-link" activeClassName="active"> <Code /> <span> Projects </span> </Link></li>  
              <li><a target="_blank" href="https://www.github.com/astuary" className="lined-link" activeClassName="active"> <GitHub /> <span> Github </span> </a></li>  
              <li><a target="_blank" href="https://www.linkedin.com/in/kunjal-panchal" className="lined-link" activeClassName="active"> <Linkedin /> <span> LinkedIn </span> </a></li>  
              {/* <li><a href="mailto:kunjalspanchal@gmail.com" className="lined-link" activeClassName="active"> <Mail /> <span> Email </span> </a></li>   */}
              {/* <li><Link to="/blog" className="lined-link" activeClassName="active"> <Feather /> <span> Blog </span> </Link></li> */}
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
