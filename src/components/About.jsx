import React, {Fragment} from "react";
import {MDBBtn, MDBIcon} from "mdbreact";

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
    margin: '25px 1vw 0 1vw'
  };
  const textBox = {
    width: '100%',
    overflowY: 'auto',
    fontFamily: 'Montserrat, serif',
    fontSize: '1em',
    color: 'white',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '0.5em'
  };
  const button = {
    width: 143,
    borderRadius: 50,
    bottom: -20,
    paddingTop: 9
  };

  return (
    <div id='about-container' style={general}>
      <div id='pic-container' style={picBox}>
        <img id='picture'
             src='https://s3-us-west-1.amazonaws.com/my.portfolio/profile.png'
             alt='profile-pic' style={picStyle}
        />
      </div>
      <div id='about-info' style={info}>
        <div id='text-container' style={textBox}>
          <h3>
            Hello {user === '' ? 'there!' : user}
          </h3>
          <br/>
          <p> I'm just another developer and I'm writing this just to fill in some space. I'm just another developer and I'm writing this
            just
            to fill in some space. You developer and I'm writing this just to fill in some space. a s d f x c vd f gh h t erke kw l k op i u
            y
            t g h j k l m n b jh g j r h e j th j k l k j n b v c x z a s d f g h j t r e w q s d f g h j k b.
          </p>
          <br/>
          <p>
            Maybe some more here....................I'm just another developer and I'm writing this just to fill in some space. I'm just
            another developer and I'm writing this just to fill in some space. to fill in some space. You developer and I'm writing this
            just to fill in some space. a s d f x c vd f gh h t erke kw l k op i u
            y
            t g h j k l m n b jh g j r h e j th j k l k j n b v c x z a s d f g h j t r e w q s d f g h j k b.
          </p>
        </div>
        <MDBBtn color="transparent" href='https://s3-us-west-1.amazonaws.com/my.portfolio/sc_resume.pdf'
                style={button}>
          <MDBIcon icon="file-pdf" className="mr-xl-1-4"/> Résumé
        </MDBBtn>
      </div>
    </div>
  );
};

export default About;