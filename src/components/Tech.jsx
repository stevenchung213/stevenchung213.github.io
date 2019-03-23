import React, {Fragment} from "react";
import {MDBTooltip} from "mdbreact";
import {Fade, Slide} from 'react-reveal';
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import {DataContext} from "../providers/Data.jsx";


const Tech = () => {

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
  const Box = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1
    },
    hover: {
      scale: 1.7
    },
    press: {
      scale: 1
    }
  });

  const technologies = {
    front: [
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/javascript.png',
        tooltip: `JavaScript ES5 | ES6`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/html5.png',
        tooltip: `HTML5`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/css3.png',
        tooltip: `CSS3 | CSS Modules`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/react.png',
        tooltip: `React`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/redux.png',
        tooltip: `Redux`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/bootstrap.png',
        tooltip: `Bootstrap 4`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/jquery.png',
        tooltip: `jQuery`
      }
    ],
    back: [
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/node.png',
        tooltip: `Node.js`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/express.png',
        tooltip: `Express.js`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mongo.png',
        tooltip: `MongoDB`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mongoose.png',
        tooltip: `Mongoose`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/postgresql.png',
        tooltip: `PostgreSQL`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mysql.png',
        tooltip: `MySQL`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/cassandra.png',
        tooltip: `Apache Cassandra`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/restful.png',
        tooltip: `RESTful Architecture`
      }
    ],
    dev: [
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/aws.png',
        tooltip: `AWS ECS | EBS | S3`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/jest.png',
        tooltip: `Jest`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/enzyme.png',
        tooltip: `Enzyme`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mocha.png',
        tooltip: `Mocha`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/chai.png',
        tooltip: `Chai`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/git.png',
        tooltip: `Git`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/github.png',
        tooltip: `GitHub`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/npm.png',
        tooltip: `npm`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/webpack.png',
        tooltip: `webpack`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/babel.png',
        tooltip: `Babel`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/windows.png',
        tooltip: `Windows`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/linux.png',
        tooltip: `Linux`
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mac.png',
        tooltip: `macOS`
      }]
  };
  const general = {
    minHeight: 'auto',
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    padding: '2vh 2vw',
    justifyContent: 'center',
    alignContent: 'center'
  };
  const titleBox = {
    width: 'auto',
    display: 'flex',
    padding: '1vh 1vw 1vh 1vw',
    justifyContent: 'center'
  };
  const tech1 = {
    minHeight: '20vh',
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center'
  };
  const tech2 = {
    minHeight: '20vh',
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    paddingBottom: '1vh'
  };
  const subTitleBox = {
    width: 'auto',
    display: 'flex',
    padding: '2vh 1vw 1vh 1vw',
    justifyContent: 'center',
  };
  const categoryTitle = {
    width: 'auto',
    margin: '0 auto',
    display: 'flex',
    padding: '1vh 1vw 1vh 1vw',
    textAlign: 'center',
    fontWeight: 400
  };
  const front = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2vh 3vw 0 3vw'
  };
  const back = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '2vh 1vw 0 1vw',
    order: 2
  };
  const dev = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    padding: '10px 20px',
    order: 3
  };
  const iconBox = {
    height: '8vh',
    margin: '10px 5px'
  };
  const icon = {
    display: 'flex',
    width: 'auto%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const techFront = [], techBack = [], techDev = [];

  return (
    <DataContext.Consumer>
      {
        context => {

          return (
            <Fragment>
              <Fade big>
                <div id='tech-container' style={general}>
                  <div id='tech1-sub' style={tech1}>
                    <Slide top>
                      <div style={titleBox}>
                        <TextBox className="black-text" initialPose="exit" pose="enter">
                          <h3 className='h3-responsive' style={{textAlign: 'center', fontWeight: 600}}>
                            <SplitText charPoses={charPoses}>
                              FAMILIAR TECHNOLOGIES
                            </SplitText>
                          </h3>
                        </TextBox>
                      </div>
                    </Slide>
                    <Slide left>
                      <div id='frontend-container' style={{float: 'left', width: '45vw'}}>
                        <div style={subTitleBox}>
                          <TextBox className="black-text" initialPose="exit" pose="enter">
                            <h4 className='h4-responsive' style={categoryTitle}>
                              <SplitText charPoses={charPoses}>
                                Front End
                              </SplitText>
                            </h4>
                          </TextBox>
                        </div>
                        <div className='category-container' style={front}>
                          {
                            context.technologies.front.map(tech => {
                              let split = tech.url.split('/');
                              let name = split[split.length - 1].slice(0, -4);
                              return (
                                <MDBTooltip placement="bottom"
                                            tooltipContent={tech.tooltip}>
                                  <Box key={name}>
                                    <div className='img-box' key={name} style={iconBox}>
                                      <img src={tech.url} alt={name} style={icon}/>
                                    </div>
                                  </Box>
                                </MDBTooltip>
                              )
                            })
                          }
                        </div>
                      </div>
                    </Slide>
                    <Slide right>
                      <div id='backend-container' style={{float: 'right', width: '45vw'}}>
                        <div style={subTitleBox}>
                          <TextBox className="black-text" initialPose="exit" pose="enter">
                            <h4 className='h4-responsive' style={categoryTitle}>
                              <SplitText charPoses={charPoses}>
                                Back End
                              </SplitText>
                            </h4>
                          </TextBox>
                        </div>
                        <div className='category-container' style={back}>
                          {
                            context.technologies.back.map(tech => {
                              let split = tech.url.split('/');
                              let name = split[split.length - 1].slice(0, -4);
                              return (
                                <MDBTooltip placement="bottom"
                                            tooltipContent={tech.tooltip}>
                                  <Box key={name}>
                                    <div className='img-box' key={name} style={iconBox}>
                                      <img src={tech.url} alt={name} style={icon}/>
                                    </div>
                                  </Box>
                                </MDBTooltip>
                              )
                            })
                          }
                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div id='tech2-sub' style={tech2}>
                    <Fade bottom>
                      <div id='dev-container' style={{width: '100%'}}>
                        <div style={subTitleBox}>
                          <TextBox className="black-text" initialPose="exit" pose="enter">
                            <h4 className='h4-responsive' style={categoryTitle}>
                              <SplitText charPoses={charPoses}>
                                Dev Tools
                              </SplitText>
                            </h4>
                          </TextBox>
                        </div>
                        <div className='category-container' style={dev}>
                          {
                            context.technologies.dev.map(tech => {
                              let split = tech.url.split('/');
                              let name = split[split.length - 1].slice(0, -4);
                              return (
                                <MDBTooltip placement="bottom"
                                            tooltipContent={tech.tooltip}>
                                  <Box key={name}>
                                    <div className='img-box' key={name} style={iconBox}>
                                      <img src={tech.url} alt={name} style={icon}/>
                                    </div>
                                  </Box>
                                </MDBTooltip>
                              )
                            })
                          }
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </Fade>
            </Fragment>
          )
        }
      }
    </DataContext.Consumer>
  );
};

export default Tech;
