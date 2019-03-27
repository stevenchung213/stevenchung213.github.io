import React, {Component, Fragment} from 'react';
import {MDBBtn, MDBDropdownMenu} from 'mdbreact';
import ResponsiveModal from 'react-responsive-modal';
import {Fade} from 'react-reveal';
import posed from 'react-pose';
import SplitText from 'react-pose-text';

import {DataContext} from "../providers/Data.jsx";


export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({showModal: true});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  render() {

    const TextBox = posed.div({
      exit: {
        x: '0%'
      },
      enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 15
      }
    });
    const charPoses = {
      exit: {opacity: 0},
      enter: {opacity: 1}
    };

    const header = {
      display: 'flex',
      justifyContent: 'center',
      padding: '0 2vw',
      width: '100%',
      height: 'auto'
    };
    const body = {
      height: 'auto',
      width: '100%',
      display: 'inline-flex',

      paddingTop: '0.5vh',
      paddingBottom: 0
    };
    const bodyTop = {
      display: 'inline-flex',
      flexDirection: 'column',
      width: '100%',
      height: 'auto'
    };
    const image = {
      height: 'auto',
      maxWidth: '-webkit-fill-available',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      objectFit: 'contain',
    };
    const list = {
      marginTop: '1vh',
      paddingLeft: '4vw',
      paddingRight: '2vw'

    };
    const listing = {
      textAlign: 'left',
      fontWeight: 400,
    };
    const footer = {
      display: 'flex',
      justifyContent: 'center',
      height: 'auto',
      width: '100%'

    };

    let project;

    return (
      <DataContext.Consumer>
        {
          context => {
            this.props.project === 'Su Casa' ? project = context.projects.sucasa :
              this.props.project === 'Zillwoah!' ? project = context.projects.zillwoah :
                this.props.project === 'My Map Pins' ? project = context.projects.mymappins :
                  this.props.project === 'Personal Site' ? project = context.projects.portfolio : project = context.projects.repofetcher;
            return (
              <Fragment>
                <MDBBtn className='modal-button-open' color="white" onClick={this.handleOpenModal} style={{fontWeight: 800}}>More
                  Info</MDBBtn>
                <ResponsiveModal open={this.state.showModal} onClose={this.handleCloseModal} center={true}
                                 blockScroll={true} focusTrapped={false} closeOnEsc={true} showCloseIcon={false}>
                  <div className='modal-header' style={header}>
                    <div className='modal-title-box' style={{display: 'flex', flexDirection: 'column'}}>
                      <TextBox initialPose="exit" pose="enter">
                        <h3 className='h3-responsive' style={{fontWeight: 600, textAlign: 'center', marginBlockEnd: 0}}>
                          <SplitText charPoses={charPoses}>
                            {project.name}
                          </SplitText>
                        </h3>
                      </TextBox>
                      <div className='modal-subtitle-box' style={{display: 'flex', justifyContent: 'center'}}>
                        <TextBox initialPose="exit" pose="enter">
                          <i style={{fontSize: '1rem', fontWeight: 500, textAlign: 'center'}}>
                            <SplitText charPoses={charPoses}>
                              {project.caption}
                            </SplitText>
                          </i>
                        </TextBox>
                      </div>
                    </div>
                  </div>
                  <div className='modal-body' style={body}>
                    <div className='modal-body-top' style={bodyTop}>
                      <Fade big>
                        <div className='modal-image-container w-responsive'
                             style={{width: '100%', height: 'auto'}}>
                          <img src={project.imgLg} alt={project.name} style={image}/>
                        </div>
                      </Fade>
                      <div className='modal-project-info' style={{width: '100%', height: 'auto', paddingTop: '0.2vh'}}>
                        <div className='modal-tech-stack'>
                          <TextBox initialPose="exit" pose="enter">
                            <h5 className='h5-responsive'
                                style={{fontWeight: 500, paddingLeft: '1em', paddingRight: '1em', textAlign: 'center', marginTop: '1vh'}}>
                              <SplitText charPoses={charPoses}>
                                {project.tech}
                              </SplitText>
                            </h5>
                          </TextBox>
                        </div>
                        <div className='modal-project-description'>
                          <ul className='modal-project-description-list' style={list}>
                            {project.description.split('*').map((item, i) => {
                              return (
                                <TextBox initialPose="exit" pose="enter">
                                  <li className='project-description-list-item' key={'listing' + i} style={listing}>
                                    <SplitText charPoses={charPoses}>
                                      {item}
                                    </SplitText>
                                  </li>
                                </TextBox>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='modal-footer w-auto' style={footer}>
                    <MDBBtn color="black" onClick={this.handleCloseModal} href='#projects-nav'>Close</MDBBtn>
                    <MDBBtn color="black" target="_blank" rel="noopener noreferrer" href={project.href}>View Code</MDBBtn>
                  </div>
                </ResponsiveModal>
              </Fragment>
            )
          }
        }
      </DataContext.Consumer>
    );
  }
};