import React from "react";
import {MDBView} from "mdbreact";
import {Fade} from 'react-reveal';


const Tech = () => {

  const urls = {
    front: ['https://s3-us-west-1.amazonaws.com/my.portfolio/javascript.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/html5.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/css3.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/react2.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/redux2.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/bootstrap.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/jquery.png'],
    back: ['https://s3-us-west-1.amazonaws.com/my.portfolio/node.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/express2.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/mongo.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/mongoose.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/postgresql1.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/mysql.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/cassandra.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/restful.png'],
    dev: ['https://s3-us-west-1.amazonaws.com/my.portfolio/aws.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/jest1.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/enzyme1.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/mocha.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/chai.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/git.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/github.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/npm.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/webpack.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/babel.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/windows1.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/linux.png',
      'https://s3-us-west-1.amazonaws.com/my.portfolio/mac.png']
  };
  const general = {
    minHeight: 'auto',
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    padding: '2vh 2vw',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'auto'
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
    alignContent: 'center',
    overflowX: 'hidden'
  };
  const tech2 = {
    minHeight: '20vh',
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    overflowY: 'hidden',
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
    // background: 'rgba(255,255,255,0.8)',
    width: 'auto',
    margin: '0 auto',
    display: 'flex',
    padding: '1vh 1vw 1vh 1vw',
    justifyContent: 'center',
    fontWeight: 900
  };
  const front = {
    // background: 'rgba(255,255,255,0.8)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2vh 3vw 0 3vw',
    overflow: 'auto'
  };
  const back = {
    // background: 'rgba(255,255,255,0.8)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '2vh 1vw 0 1vw',
    order: 2,
    overflow: 'auto'
  };
  const dev = {
    // background: 'rgba(255,255,255,0.8)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    padding: '10px 20px',
    order: 3,
    overflow: 'auto'
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
          <Fade top>
            <div style={titleBox}>
              <h3 className='h3-responsive' style={{fontWeight: 900}}>
                - FAMILIAR TECHNOLOGIES -
              </h3>
            </div>
          </Fade>
          <Fade left>
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
                      <MDBView hover zoom key={tech}>
                        <div className='img-box' key={tech} style={iconBox}>
                          <img src={url} alt={tech} style={icon}/>
                        </div>
                      </MDBView>
                    )
                  })
                }
              </div>
            </div>
          </Fade>
          <Fade right>
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
                      <MDBView hover zoom key={tech}>
                        <div className='img-box' key={tech} style={iconBox}>
                          <img src={url} alt={tech} style={icon}/>
                        </div>
                      </MDBView>
                    )
                  })
                }
              </div>
            </div>
          </Fade>
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
                      <MDBView hover zoom key={tech}>
                        <div className='img-box' key={tech} style={iconBox}>
                          <img src={url} alt={tech} style={icon}/>
                        </div>
                      </MDBView>
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
