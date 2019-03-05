import React, {Component} from 'react';
// import Slider from "react-slick";
import {Carousel} from 'react-responsive-carousel';
import Modal from './Modal.jsx';
import {Fade} from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';


export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general = {
      height: 'auto',
      width: '100%',
      paddingTop: '2vh',
      paddingBottom: '1vh',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'black'
    };
    const titleBox = {
      width: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '1vh 1vw 1vh 1vw',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      marginBottom: 10
    };
    const projects = [
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/sucasa-small.png',
        name: 'Su Casa',
        description: 'Rental & Lodging App'
      },
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/zillwoah-small1.png',
        name: 'Zillwoah!',
        description: 'Real Estate App'
      },
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/mappins-small.png',
        name: 'My Map Pins',
        description: 'App using Google Maps API'
      },
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/repofetcher-small.png',
        name: 'Github Repo Fetcher',
        description: 'App using Github API'
      }
    ];

    return (
      <Fade big>
        <div id='projects-container' style={general}>
          <Zoom top>
            <div style={titleBox}>
              <h3 className='h3-responsive' style={{fontWeight: 900}}>
                - SOME OF MY PROJECTS -
              </h3>
            </div>
          </Zoom>
          <Carousel infiniteLoop={true} useKeyboardArrows={true} dynamicHeight={false}
                    centerMode={true} showThumbs={false} showStatus={false}
                    showIndicators={false}>
            {projects.map((project, i) =>
              <Fade big key={'project' + (i + 1)}>
                <div>
                  <div className="w-responsive mx-auto" style={{paddingBottom: '1.5vh'}}>
                    <div className="mx-auto w-responsive">
                      <img className="mx-auto w-responsive" src={project.src} alt={project.name}/>
                      <div className='w-responsive mx-auto text-center p-1 mt-1'>
                        <h4 className="h4-responsive" style={{color: 'white'}}>{project.name}</h4>
                        <h5 className='h5-responsive' style={{color: 'white', marginBottom: 5}}>{project.description}</h5>
                        <Modal project={project.name}/>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            )}
          </Carousel>
        </div>
      </Fade>
    );
  }
};

