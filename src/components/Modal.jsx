import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {MDBBtn} from 'mdbreact';


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

    const sucasa = {
      name: 'Su Casa - Rental & Lodging Application',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/sucasa.png',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | AWS EBS | AWS S3 | Jest | Enzyme',
      description: 'Constructed a clean UI/UX experience while focusing on modularity via React. All routes maintained through' +
        ' Node/Express while accounting for static and variable endpoints. Deployed using AWS Elastic Beanstalk, AWS S3 and Mongo' +
        ' Atlas',
      href: 'https://github.com/stevenchung213/overview-proxy/tree/DEMO_LOCALHOST'
    };
    const zillwoah = {
      name: 'Zillwoah! - Real Estate Application',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/zillwoah1.png',
      tech: 'React | Node | Express | PostgreSQL | CassandraDB | AWS EC2 | Nginx | K6 | New Relic | Loader.io',
      description: 'Efficiently scaled legacy codebase to handle 10 million records.' +
        'Decreased front end load times from 1400ms to <500ms with compression, minifying and code splitting techniques.' +
        'Optimized database query times from 5ms to <0.05ms utilizing specific indexing features.' +
        'Implemented Nginx to increase the successful amount of requests per second from <500 to ~15000',
      href: 'https://github.com/SDC-8/steve'
    };
    const mymappins = {
      name: 'My Map Pins - Create your own notes on geographical locations using Google Maps',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/mappins.PNG',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | Google Maps API',
      description: 'Implemented Google Maps API for user to have the ability to create and save pins containing user info based on' +
        ' specified coordinates.' +
        'Used Google Maps React library for map rendering',
      href: 'https://github.com/stevenchung213/mvp'
    };
    const repofecther = {
      name: 'Github Repo Fetcher - Retrieve all repos of a Github user',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/repofetcher.PNG',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | GitHub API',
      description: 'Designed a clean interface for users to search for and display a Github user\'s repos.' +
        'Saves all user\'s repos to MongoDB.' +
        'Lists top 25 repo\'s sorted by fork count when not searching for specific user',
      href: 'https://github.com/stevenchung213/hrr34-fullstack-review'
    };

    let project;
    this.props.project === 'Su Casa' ? project = sucasa :
      this.props.project === 'Zillwoah!' ? project = zillwoah :
        this.props.project === 'My Map Pins' ? project = mymappins : project = repofecther;

    const body = {
      maxHeight: '65vh',
      height: '65vh',
      display: 'inline-flex',
      verticalAlign: 'center',
      justifyContent: 'center'
    };
    const bodyTop = {
      display: 'flex',
      justifyContent: 'center'
    };
    const image = {
      float: 'left',
      height: 'auto',
      maxHeight: '90%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      objectFit: 'contain',
    };
    const list = {
      marginTop: '4vh',
      paddingLeft: '2vw',

    };
    const listing = {
      textAlign: 'left',
      fontWeight: 600,
    };
    const footer = {
      display: 'flex',
      justifyContent: 'center'
    };
    return (
      <div id='modal-container'>
        {/* BUTTON */}
        <MDBBtn className='modal-button-open' color="white" onClick={this.handleOpenModal}>More Info</MDBBtn>
        {/* MODAL */}
        <ReactModal isOpen={this.state.showModal} shouldCloseOnEsc={true}
                    shouldReturnFocusAfterClose={true} contentLabel="Minimal Modal Example"
                    shouldCloseOnOverlayClick={true} ariaHideApp={true}
        >
          <div className='modal-header' style={{display: 'flex', justifyContent: 'center'}}>
            <h4 className='h4-responsive pt-3' style={{fontWeight: 700, textAlign: 'center'}}>
              {project.name}
            </h4>
          </div>
          <div className='modal-body' style={body}>
            <div className='modal-body-top' style={bodyTop}>
              <div className='modal-image-container'>
                <img src={project.src} alt={project.name} style={image}/>
              </div>
              <div className='modal-project-info' style={{overflowY: 'auto', paddingLeft: '1vw'}}>
                <div className='modal-tech-stack'>
                  <h5 className='h5-responsive' style={{textAlign: 'center', marginBottom: '0.5em', marginTop: '1.5em', fontWeight: 700}}>
                    Tech Stack
                  </h5>
                  <p style={{fontWeight: 600, paddingLeft: '1em', paddingRight: '1em', textAlign: 'center'}}>{project.tech}</p>
                </div>
                <div className='modal-project-description'>
                  <ul className='modal-project-description-list' style={list}>
                    {project.description.split('.').map((item, i) => {
                      return (
                        <li className='project-description-list-item' key={'listing' + i} style={listing}>
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer' style={footer}>
            <MDBBtn color="black" onClick={this.handleCloseModal} href='#projects-nav'>Close</MDBBtn>
            <MDBBtn color="black" target="_blank" rel="noopener noreferrer" href={project.href}>View Code</MDBBtn>
          </div>
        </ReactModal>
      </div>
    );
  }
};
