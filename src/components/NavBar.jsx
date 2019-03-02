import React, {Component} from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import {BrowserRouter as Router} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {

    const navBarStyle = {
      position: 'fixed',
      backgroundColor: 'black',
      opacity: '0.7',
      zIndex: 10000,
      width: '100%'
    };
    const name = {
      fontSize: '28px',
      fontFamily: 'Montserrat !important',
      cursor: 'pointer',
      color: 'white'
    };

    return (
      <Router>

          <MDBNavbar color="black" dark scrolling scrollingNavbarOffset={10} expand="md" style={navBarStyle} transparent>
            <MDBNavbarBrand style={name}>
              <AnchorLink href='#main' style={{fontWeight: 900}}><strong className="white-text">STEVEN CHUNG</strong></AnchorLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse}/>
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <AnchorLink href='#about'>ABOUT</AnchorLink>
                </MDBNavItem>
                <MDBNavItem>
                  <AnchorLink href='#tech'>TECH</AnchorLink>
                </MDBNavItem>
                <MDBNavItem>
                  <AnchorLink  href='#projects'>PROJECTS</AnchorLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user"/>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown">
                      <MDBDropdownItem href="https://www.linkedin.com/in/stevenchung-213">
                        <MDBIcon fab icon="linkedin"/> LinkedIn
                      </MDBDropdownItem>
                      <MDBDropdownItem href="https://www.github.com/stevenchung213">
                        <MDBIcon fab icon="github"/> Github
                      </MDBDropdownItem>
                      <MDBDropdownItem href="mailto:stevechung.213@gmail.com">
                        <MDBIcon far icon="envelope"/> Gmail
                      </MDBDropdownItem>
                      <MDBDropdownItem href="https://s3-us-west-1.amazonaws.com/my.portfolio/sc_resume.pdf">
                        <MDBIcon icon="file-pdf"/> Résumé
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

      </Router>
    );
  }
}
