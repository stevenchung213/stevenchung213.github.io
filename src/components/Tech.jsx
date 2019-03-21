import React from "react";
import {MDBTooltip} from "mdbreact";
import {Fade, Slide} from 'react-reveal';
import posed from 'react-pose';


const Tech = () => {

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

  const urls = {
    front: ['https://s3-us-west-1.amazonaws.com/my.portfolio/png/javascript.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/html5.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/css3.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/react.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/redux.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/bootstrap.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/jquery.png'],
    back: ['https://s3-us-west-1.amazonaws.com/my.portfolio/png/node.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/express.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mongo.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mongoose.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/postgresql.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mysql.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/cassandra.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/restful.png'],
    dev: ['https://s3-us-west-1.amazonaws.com/my.portfolio/png/aws.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/jest.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/enzyme.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mocha.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/chai.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/git.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/github.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/npm.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/webpack.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/babel.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/windows.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/linux.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mac.png']
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

  return (
    <Fade big>
      <div id='tech-container' style={general}>
        <div id='tech1-sub' style={tech1}>
          <Slide top>
            <div style={titleBox}>
              <h3 className='h3-responsive' style={{textAlign: 'center', fontWeight: 600}}>
                - FAMILIAR TECHNOLOGIES -
              </h3>
            </div>
          </Slide>
          <Slide left>
            <div id='frontend-container' style={{float: 'left', width: '45vw'}}>
              <div style={subTitleBox}>
                <h4 className='h4-responsive' style={categoryTitle}>{'< Front End >'}</h4>
              </div>
              <div className='category-container' style={front}>
                {
                  urls.front.map(url => {
                    let split = url.split('/');
                    let tech = split[split.length - 1].slice(0, -4);
                    return (
                      <MDBTooltip placement="bottom"
                                  tooltipContent={tech.toUpperCase()}>
                        <Box key={tech}>
                          <div className='img-box' key={tech} style={iconBox}>
                            <img src={url} alt={tech} style={icon}/>
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
                <h4 className='h4-responsive' style={categoryTitle}>{'< Back End >'}</h4>
              </div>
              <div className='category-container' style={back}>
                {
                  urls.back.map(url => {
                    let split = url.split('/');
                    let tech = split[split.length - 1].slice(0, -4);
                    return (
                      <MDBTooltip placement="bottom"
                                  tooltipContent={tech.toUpperCase()}>
                        <Box key={tech}>
                          <div className='img-box' key={tech} style={iconBox}>
                            <img src={url} alt={tech} style={icon}/>
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
                <h4 className='h4-responsive' style={categoryTitle}>{'< Dev Tools >'}</h4>
              </div>
              <div className='category-container' style={dev}>
                {
                  urls.dev.map(url => {
                    let split = url.split('/');
                    let tech = split[split.length - 1].slice(0, -4);
                    return (
                      <MDBTooltip placement="bottom"
                                  tooltipContent={tech.toUpperCase()}>
                        <Box key={tech}>
                          <div className='img-box' key={tech} style={iconBox}>
                            <img src={url} alt={tech} style={icon}/>
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
  );
};

export default Tech;
