import React, {Component} from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import {BrowserRouter as Router} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import posed from 'react-pose';
import SplitText from 'react-pose-text';


export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {

    const TextBox = posed.div({
      exit: {
        x: '-100%'
      },
      enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 100
      }
    });

    const charPoses = {
      exit: {opacity: 0},
      enter: {opacity: 1}
    };

    const navBarStyle = {
      position: 'fixed',
      backgroundColor: 'black',
      opacity: '1',
      zIndex: 10000,
      width: '100%'
    };
    const name = {
      fontSize: '1.7rem',
      cursor: 'pointer',
      color: 'white'
    };

    return (
      <Router>
        <MDBNavbar color="black" dark scrolling scrollingNavbarOffset={10} expand="md" style={navBarStyle} transparent>
          <MDBNavbarBrand style={name}>
            <AnchorLink href='#main' style={{fontWeight: 300}}>
              <TextBox initialPose="exit" pose="enter">
                <strong className="white-text">
                  <SplitText charPoses={charPoses}>
                    STEVEN CHUNG
                  </SplitText>
                </strong>
              </TextBox>
            </AnchorLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse}/>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <AnchorLink href='#about-nav'>
                  <TextBox initialPose="exit" pose="enter" style={{fontWeight: 500}}>
                    <SplitText charPoses={charPoses}>
                      ABOUT
                    </SplitText>
                  </TextBox>
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem>
                <AnchorLink href='#tech-nav'>
                  <TextBox initialPose="exit" pose="enter" style={{fontWeight: 500}}>
                    <SplitText charPoses={charPoses}>
                      TECH
                    </SplitText>
                  </TextBox>
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem>
                <AnchorLink href='#projects-nav'>
                  <TextBox initialPose="exit" pose="enter" style={{fontWeight: 500}}>
                    <SplitText charPoses={charPoses}>
                      PORTFOLIO
                    </SplitText>
                  </TextBox>
                </AnchorLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon far icon="address-card fa-2x"/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown">
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="https://www.linkedin.com/in/stevenchung-213" style={{fontWeight: 600}}>
                      <MDBIcon fab icon="linkedin"/> LinkedIn
                    </MDBDropdownItem>
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="https://www.github.com/stevenchung213" style={{fontWeight: 600}}>
                      <MDBIcon fab icon="github"/> Github
                    </MDBDropdownItem>
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="mailto:stevechung.213@gmail.com" style={{fontWeight: 600}}>
                      <MDBIcon far icon="envelope"/> Gmail
                    </MDBDropdownItem>
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="https://s3-us-west-1.amazonaws.com/my.portfolio/steven_chung_resume.pdf" style={{fontWeight: 600}}>
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
