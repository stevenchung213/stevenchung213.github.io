import React, {Fragment} from 'react';
import {Carousel} from 'react-responsive-carousel';
import {Fade, Slide} from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import posed from "react-pose";
import SplitText from "react-pose-text";
import Loadable from 'react-loadable';
import ReactLoading from './Loading.jsx';
import {DataContext} from "../providers/Data.jsx";


const LoadableModal = Loadable({
  loader: () => import(`./Modal.jsx`),
  loading() {
    return <ReactLoading/>
  }
});


const Projects = () => {

  const TextBox = posed.div({
    exit: {
      x: '0%'
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

  const projectsArray = [];

  return (
    <DataContext.Consumer>
      {
        context => {

          for (const project in context.projects) {
            projectsArray.push(context.projects[project])
          }

          return (
            <Fragment>
              <Fade clear>
                <div id='projects-container' style={general}>
                  <Fade top>
                    <div style={titleBox}>
                      <TextBox className="white-text" initialPose="exit" pose="enter">
                        <h3 className='h3-responsive' style={{textAlign: 'center', fontWeight: 600}}>
                          <SplitText charPoses={charPoses}>
                            SOME OF MY WORK
                          </SplitText>
                        </h3>
                      </TextBox>
                    </div>
                  </Fade>
                  <Carousel infiniteLoop={true} useKeyboardArrows={true}
                            dynamicHeight={false} centerMode={true}
                            showThumbs={false} showStatus={false}
                            showIndicators={false}>
                    {
                      projectsArray.map((project, i) =>
                        <div key={'project' + (i + 1)}>
                          <div>
                            <div className="w-responsive mx-auto" style={{paddingBottom: '1.5vh'}}>
                              <div className="mx-auto w-responsive">
                                <Zoom top>
                                  <img className="mx-auto w-responsive" src={project.imgSm} alt={project.name}/>
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
                                        {project.subtitle}
                                      </i>
                                    </h5>
                                  </Slide>
                                  <Slide bottom>
                                    <LoadableModal project={project.name}/>
                                  </Slide>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </Carousel>
                </div>
              </Fade>
            </Fragment>
          )
        }
      }
    </DataContext.Consumer>
  );
};

export default Projects;