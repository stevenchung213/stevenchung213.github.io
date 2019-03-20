import React, {Component} from 'react';
import {MDBBtn} from 'mdbreact';
import ResponsiveModal from 'react-responsive-modal';
import {Fade} from 'react-reveal';
import posed from 'react-pose';
import SplitText from 'react-pose-text';


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
        x: '-100%'
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

    const sucasa = {
      name: 'Su Casa',
      caption: 'Rental & Lodging Application',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/sucasa.png',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | AWS EBS | AWS S3 | Jest | Enzyme',
      description: 'Constructed a clean UI/UX experience while focusing on modularity via React * Optimized page load speeds from 3' +
        ' seconds to less than 1 second using image resizing/compression and minifying * Developed using Agile methodologies and tested' +
        ' with Jest/Enzyme * Deployed application using AWS Elastic Beanstalk, AWS S3 and Mongo Cloud Atlas',
      href: 'https://github.com/stevenchung213/overview-proxy/tree/DEMO_LOCALHOST'
    };
    const zillwoah = {
      name: 'Zillwoah!',
      caption: 'Real Estate Application',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/zillwoah1.png',
      tech: 'React | Node | Express | PostgreSQL | CassandraDB | AWS EC2 | Nginx | K6 | New Relic | Loader.io',
      description: 'Efficiently scaled legacy codebase to handle 10 million records *' +
        'Created a seed script which randomly generated and populated PostgreSQL with 10 million records in less than 10 minutes;' +
        ' Cassandra in less than 20 minutes * ' +
        'Reduced database query times to less than 0.5ms through indexing on Postgresql; less than 1ms on Cassandra * ' +
        'Stress-tested and horizontally scaled micro-service to 4 servers using NGINX load balancer to handle 15,000 requests/second *' +
        ' Deployed application using multiple AWS EC2 T2.micro instances',
      href: 'https://github.com/SDC-8/steve'
    };
    const mymappins = {
      name: 'My Map Pins',
      caption: 'Save your own labeled marker on Google Maps',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/mappins.PNG',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | Google Maps API',
      description: 'MVP application designed with Bootstrap in the front end *' + 'Rendered maps utilizing the Google-Maps-React library' +
        ' along with Google Maps API * Added functionality for user to attach a note to specified geographical Markers *' + " Saved" +
        " user's personalized note along with assigned coordinates using MongoDB",
      href: 'https://github.com/stevenchung213/mvp'
    };
    const repofecther = {
      name: 'Github Repo Fetcher',
      caption: 'Retrieve all repos of a Github user',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/repofetcher.PNG',
      tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | GitHub API',
      description: 'Designed a clean interface for users to search for and display a Github user\'s repos * ' +
        'Saves all user\'s repos to MongoDB * ' +
        'Lists top 25 repo\'s sorted by fork count when not searching for specific user',
      href: 'https://github.com/stevenchung213/hrr34-fullstack-review'
    };
    const portfolio = {
      name: 'Personal Site',
      caption: 'Portfolio',
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/portfolio.png',
      tech: 'React | Node | Express | Material Design Bootstrap | Responsive Design | AWS S3 | Github Pages',
      description: 'Front end bootstrapped using Material Design' +
        ' for' +
        ' React * Webpack gzip compression, image compression and caching enabled for optimal loading speeds* ' +
        'Deployed using Github Pages with conditional React rendering * All image files hosted by S3 with caching enabled * Best viewed' +
        ' on Chrome due to fixed transparent background',
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

    return (
      <div>
        <MDBBtn className='modal-button-open' color="white" onClick={this.handleOpenModal} style={{fontWeight: 800}}>More Info</MDBBtn>
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
                  <img src={project.src} alt={project.name} style={image}/>
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
      </div>
    );
  }
};
