import React from 'react';
import styled from "styled-components";
import {MDBIcon} from "mdbreact";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Bounce, Fade} from 'react-reveal';
import posed from 'react-pose';
import SplitText from 'react-pose-text';


const Wallpaper = ({user, mobile}) => {

  const Background = styled.div`
    height: 100vh;
    background-color: transparent;
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/png/city_skyline.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  `;
  const Mobile = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/png/city_skyline_mobile.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  `;

  const TextBox = posed.div({
    exit: {
      x: '-100%'
    },
    enter: {
      x: '0%',
      beforeChildren: true,
      staggerChildren: 60
    }
  });
  const charPoses = {
    exit: {opacity: 0},
    enter: {opacity: 1}
  };

  const general = {
    position: 'absolute',
    top: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 1,
    width: '100%',
    margin: 'auto'
  };
  const intro = {
    borderRadius: '5rem',
    background: 'transparent',
    maxWidth: '100%',
    height: 'auto',
    width: 'auto',
    margin: 'auto',
    padding: '3vh 6vw',
    marginBottom: '1vh'
  };
  const hello = {
    color: 'black',
    fontSize: '270%',
    textAlign: 'center',
    fontWeight: 900,
    height: 'auto',
    marginBottom: 0
  };
  const arrow = {
    margin: 'auto'
  };
  let userName = user === '' ? '!' : ` ${user.toUpperCase()}!`;

  return (
    <Fade clear>
      <div>
        <div id='hello' style={general}>
          <Bounce top>
            <div id='intro' style={intro}>
              <div>
                <TextBox initialPose="exit" pose="enter">
                  <h1 className='h1-responsive' style={hello}>
                    <SplitText charPoses={charPoses}>
                      {`HEY THERE${userName}`}
                    </SplitText>
                  </h1>
                </TextBox>
              </div>
              <div>
              </div>
            </div>
          </Bounce>
          <Bounce bottom>
            <div id='down-arrow' style={arrow}>
              <AnchorLink href='#about-nav' aria-label="downArrow">
                <MDBIcon icon="angle-double-down fa-6x" className='black-text'/>
              </AnchorLink>
            </div>
          </Bounce>
        </div>
        {
          mobile ? <Mobile/> : <Background/>
        }
      </div>
    </Fade>
  );
};

export default Wallpaper;
