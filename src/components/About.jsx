import React from "react";
import {MDBBtn, MDBIcon} from "mdbreact";
import {Bounce, Fade} from 'react-reveal';

const About = ({user}) => {

  user = user.length > 0 ? user + '!' : user;

  const general = {
    height: '55vh',
    width: '100%',
    margin: '5vh 5w',
    backgroundColor: 'black',
    padding: '3vh 6vw 5vh 1vw',
    display: 'flex',
    flexDirection: 'row'
  };
  const picBox = {
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const picStyle = {
    position: 'relative',
    verticalAlign: 'middle',
    maxWidth: '80%',
    maxHeight: '80%',
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
    paddingRight: '1em'
  };
  const button = {
    width: 143,
    borderRadius: 50,
    bottom: -20,
    paddingTop: 9
  };

  return (
    <Fade big>
      <div id='about-container' style={general}>
        <Bounce>
          <div id='pic-container' style={picBox}>
            <img id='picture'
                 src='https://s3-us-west-1.amazonaws.com/my.portfolio/profile.png'
                 alt='profile-pic' style={picStyle}
            />
          </div>
        </Bounce>
        <Bounce>
          <div id='about-info' style={info}>
            <div id='text-container' style={textBox}>
              {/*<h3 className='h3-responsive'>*/}
                {/*Hello {user === '' ? 'there!' : user}*/}
              {/*</h3>*/}
              {/*<br/>*/}
              <h5 className='h5-responsive'>{`I am a self-taught and self-motivated individual with technical skills that were derived over more than a decade.  I had many years of hands-on hardware experience and now am focusing more on the software side.  I have developed a strong understanding of all things computer related and have a knack for problem solving.  From debugging and optimizing to building out full stack applications, I now enjoy every bit of software development!`}
              </h5>
            </div>
            <MDBBtn color="transparent" target="_blank" rel="noopener noreferrer"
                    href='https://s3-us-west-1.amazonaws.com/my.portfolio/stevenchung_resume.pdf'
                    style={button}>
              <MDBIcon icon="file-pdf fa-2x" className="mr-xl-1-4"/> Résumé
            </MDBBtn>
          </div>
        </Bounce>
      </div>
    </Fade>
  );
};

export default About;