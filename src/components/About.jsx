import React from "react";
import {MDBBtn, MDBIcon} from "mdbreact";
import {Fade} from 'react-reveal';
import Jump from 'react-reveal/Jump';
import Swing from 'react-reveal/Swing';
import posed from 'react-pose';
import SplitText from 'react-pose-text';


const About = () => {

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

  const general = {
    minHeight: 'auto',
    height: 'auto',
    width: '100%',
    margin: '5vh 5w',
    backgroundColor: 'black',
    padding: '5vh 4vw 5vh 1vw',
    alignContent: 'center'
  };
  const about = {
    display: 'flex',
    flexDirection: 'row'
  };
  const picBox = {
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  };
  const picStyle = {
    verticalAlign: 'middle',
    maxWidth: '60%',
    maxHeight: '60%',
  };
  const info = {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25
  };
  const textBox = {
    height: 'auto',
    width: '100%',
    fontFamily: 'Montserrat, serif',
    fontSize: '1em',
    color: 'white',
    marginTop: 15,
    paddingLeft: '1em',
    paddingRight: '1em'
  };
  const blurb = {
    fontSize: '140%',
    lineHeight: 1.5
  };
  const button = {
    width: 143,
    borderRadius: 50,
    bottom: -20,
    paddingTop: 9
  };

  return (
    <Fade clear>
      <div id='about-container' style={general}>
        <div id='about-inner-container' style={about}>
          <Jump>
            <div id='pic-container' style={picBox}>
              <img id='picture'
                   src='https://s3-us-west-1.amazonaws.com/my.portfolio/profile.png'
                   alt='profile-pic' style={picStyle}
              />
            </div>
          </Jump>
          <div id='about-info' style={info}>
            <TextBox id='text-container' initialPose="exit" pose="enter" style={textBox}>
              <h5 className='h5-responsive' style={blurb}>
                <SplitText charPoses={charPoses}>
                  {`I’m Steve and I have a passion for problem solving all things computer related.  I build polished, pixel-perfect full-stack applications  using the latest industry technologies. After years of hands-on computer hardware experience, I transitioned into software engineering and have been loving it ever since. I am a self-taught, motivated individual with technical skills that span over more than a decade.`}
                </SplitText>
              </h5>
            </TextBox>
            <Swing>
              <MDBBtn color="transparent" target="_blank" rel="noopener noreferrer"
                      href='https://s3-us-west-1.amazonaws.com/my.portfolio/steven_chung_resume.pdf'
                      style={button}>
                <MDBIcon icon="file-pdf fa-2x" className="mr-xl-1-4"/> Résumé
              </MDBBtn>
            </Swing>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
