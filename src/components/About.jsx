import React from "react";
import {MDBBtn, MDBIcon} from "mdbreact";
import {Roll, Fade} from 'react-reveal';


const About = () => {

  const general = {
    height: 'auto',
    width: '100%',
    margin: '5vh 5w',
    backgroundColor: 'black',
    padding: '5vh 4vw 5vh 1vw',
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
    position: 'relative',
    verticalAlign: 'middle',
    maxWidth: '60%',
    maxHeight: '60%',
  };
  const info = {
    width: "60%",
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25
  };
  const textBox = {
    height: 'auto',
    width: '100%',
    overflow: 'auto',
    overflowX: 'hidden',
    fontFamily: 'Montserrat, serif',
    fontSize: '1em',
    color: 'white',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
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
        <Roll left>
          <div id='pic-container' style={picBox}>
            <img id='picture'
                 src='https://s3-us-west-1.amazonaws.com/my.portfolio/profile.png'
                 alt='profile-pic' style={picStyle}
            />
          </div>
        </Roll>
        <Roll right>
          <div id='about-info' style={info}>
            <div id='text-container' style={textBox}>
              <h5
                className='h5-responsive' style={blurb}>{`I’m Steve and I have a passion for problem solving all things computer related.  I build polished, pixel-perfect full-stack applications  using the latest industry technologies. After years of hands-on computer hardware experience, I transitioned into software engineering and have been loving it ever since. I am a self-taught, motivated individual with technical skills that span over more than a decade.`}
              </h5>
            </div>
            <MDBBtn color="transparent" target="_blank" rel="noopener noreferrer"
                    href='https://s3-us-west-1.amazonaws.com/my.portfolio/stevenchung_resume.pdf'
                    style={button}>
              <MDBIcon icon="file-pdf fa-2x" className="mr-xl-1-4"/> Résumé
            </MDBBtn>
          </div>
        </Roll>
      </div>
    </Fade>
  );
};

export default About;
