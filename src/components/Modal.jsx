import React, {Component} from 'react';
import {MDBBtn} from 'mdbreact';
import ResponsiveModal from 'react-responsive-modal';


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
      name: 'Su Casa',
      caption: 'Rental & Lodging Application',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/sucasa.png',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | AWS EBS | AWS S3 | Jest | Enzyme',
      description: 'Constructed a clean UI/UX experience while focusing on modularity via React. All routes maintained through' +
        ' Node/Express while accounting for static and variable endpoints. Deployed using AWS Elastic Beanstalk, AWS S3 and Mongo' +
        ' Atlas',
      href: 'https://github.com/stevenchung213/overview-proxy/tree/DEMO_LOCALHOST'
    };
    const zillwoah = {
      name: 'Zillwoah!',
      caption: 'Real Estate Application',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/zillwoah1.png',
      tech: 'React | Node | Express | PostgreSQL | CassandraDB | AWS EC2 | Nginx | K6 | New Relic | Loader.io',
      description: 'Efficiently scaled legacy codebase to handle 10 million records.' +
        'Decreased front end load times from 1400ms to <500ms with compression, minifying and code splitting techniques.' +
        'Optimized database query times from 5ms to <0.05ms utilizing specific indexing features.' +
        'Implemented Nginx to increase the successful amount of requests per second from <500 to ~15000',
      href: 'https://github.com/SDC-8/steve'
    };
    const mymappins = {
      name: 'My Map Pins',
      caption: 'Save your own labeled marker on Google Maps',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/mappins.PNG',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | Google Maps API',
      description: 'Implemented Google Maps API for user to have the ability to create and save pins containing user info based on' +
        ' specified coordinates.' +
        'Used Google Maps React library for map rendering',
      href: 'https://github.com/stevenchung213/mvp'
    };
    const repofecther = {
      name: 'Github Repo Fetcher',
      caption: 'Retrieve all repos of a Github user',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/repofetcher.PNG',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | GitHub API',
      description: 'Designed a clean interface for users to search for and display a Github user\'s repos.' +
        'Saves all user\'s repos to MongoDB.' +
        'Lists top 25 repo\'s sorted by fork count when not searching for specific user',
      href: 'https://github.com/stevenchung213/hrr34-fullstack-review'
    };
    const portfolio = {
      name: 'Portfolio Site',
      caption: '',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/portfolio.png',
      tech: 'React | Node | Express | Material Design Bootstrap | Responsive Design | AWS S3 | Github Pages',
      description: 'Completely responsive front end. Front end design bootstrapped using Material Design for React.' +
        'Deployed on Github Pages. Files served by AWS S3',
      href: 'https://github.com/stevenchung213/stevenchung213.github.io'
    };

    let project;
    this.props.project === 'Su Casa' ? project = sucasa :
      this.props.project === 'Zillwoah!' ? project = zillwoah :
        this.props.project === 'My Map Pins' ? project = mymappins :
          this.props.project === 'Portfolio' ? project = portfolio : project = repofecther;

    const header = {
      display: 'flex',
      justifyContent: 'center',
      padding: '0 2vw',
      width: '100%',
      height: 'auto'
    };
    const body = {
      maxHeight: '75vh',
      height: '100%',
      width: '100%',
      display: 'inline-flex',
      verticalAlign: 'center',
      justifyContent: 'center',
      paddingTop: 0,
      paddingBottom: 0
    };
    const bodyTop = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
    };
    const image = {
      height: 'auto',
      maxWidth: '-webkit-fill-available',
      maxHeight: '90%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      objectFit: 'contain',
    };
    const list = {
      marginTop: '1vh',
      paddingLeft: '2vw',
      paddingRight: '2vw'

    };
    const listing = {
      textAlign: 'left',
      fontWeight: 600,
    };
    const footer = {
      display: 'flex',
      justifyContent: 'center',
      height: 'auto',
      width: '100%'

    };
    return (
      <div id='modal-container'>
        <MDBBtn className='modal-button-open' color="white" onClick={this.handleOpenModal}>More Info</MDBBtn>
        <ResponsiveModal open={this.state.showModal} onClose={this.handleCloseModal} center
                         blockScroll={true} focusTrapped={true}>
          <div className='modal-header' style={header}>
            <h3 className='h3-responsive' style={{fontWeight: 800, textAlign: 'center'}}>
              {project.name} <i style={{fontWeight: 800}}>{` - ${project.caption}`}</i>
            </h3>
          </div>
          <div className='modal-body' style={body}>
            <div className='modal-body-top' style={bodyTop}>
              <div className='modal-image-container w-responsive'
                   style={{display: 'flex', width: '100%', maxHeight: '', height: '100%', paddingTop: '1vh'}}>
                <img src={project.src} alt={project.name} style={image}/>
              </div>
              <div className='modal-project-info' style={{width: '100%', height: 'auto'}}>
                <div className='modal-tech-stack'>
                  <h4 className='h4-responsive'
                      style={{fontWeight: 400, paddingLeft: '1em', paddingRight: '1em', textAlign: 'center'}}>{project.tech}</h4>
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
          <div className='modal-footer w-auto' style={footer}>
            <MDBBtn color="black" onClick={this.handleCloseModal} href='#projects-nav'>Close</MDBBtn>
            <MDBBtn color="black" target="_blank" rel="noopener noreferrer" href={project.href}>View Code</MDBBtn>
          </div>
        </ResponsiveModal>
      </div>
    );
  }
};
