import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import Modal from './Modal.jsx';
import {Fade, Slide} from 'react-reveal';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';

const Projects = () => {

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
    },
    {
      src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/portfolio-small.png',
      name: 'Portfolio',
      description: 'My Portfolio Site'
    }
  ];

  return (
    <Fade clear>
      <div id='projects-container' style={general}>
        <Jump top>
          <div style={titleBox}>
            <h3 className='h3-responsive' style={{textAlign: 'center', fontWeight: 600}}>
              - SOME OF MY WORK -
            </h3>
          </div>
        </Jump>
        <Carousel infiniteLoop={true} useKeyboardArrows={true} dynamicHeight={false}
                                                   centerMode={true} showThumbs={false} showStatus={false}
                                                   showIndicators={false}>
          {projects.map((project, i) =>
            <div key={'project' + (i + 1)}>
              <div>
                <div className="w-responsive mx-auto" style={{paddingBottom: '1.5vh'}}>
                  <div className="mx-auto w-responsive">
                    <Zoom top>
                      <img className="mx-auto w-responsive" src={project.src} alt={project.name}/>
                    </Zoom>
                    <div className='w-responsive mx-auto text-center p-1 mt-1'>
                      <Slide right>
                        <h4 className="h4-responsive" style={{color: 'white', fontWeight: 500}}>
                          {project.name}
                        </h4>
                      </Slide>
                      <Slide left>
                        <h5 className='h5-responsive' style={{color: 'white', marginBottom: 5}}>
                          <i>
                            {project.description}
                          </i>
                        </h5>
                      </Slide>
                      <Slide bottom>
                        <Modal project={project.name}/>
                      </Slide>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </Fade>
  );
};

export default Projects;
