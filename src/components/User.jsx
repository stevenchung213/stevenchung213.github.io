import React from 'react';
import styled from 'styled-components';
import {MDBInput} from "mdbreact";
import {Fade, Slide} from 'react-reveal';


const User = (props) => {

  const Background = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/background2.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
  `;
  const Button = styled.div`
    display: flex;
    justify-content: center;
  `;
  const userBox = {
    display: 'flex',
    justifyContent: 'center',
  };
  const button = {
    borderRadius: 20,
    width: '10vw',
    height: 40,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat, serif',
    backgroundColor: 'white'
  };

  return (
    <Fade clear>
      <Background>
        <div id='user-container' style={userBox}>
          <form style={{marginTop: '65vh'}}>
            <Slide left>
              <label>
                <MDBInput label="enter name" icon="user" size="lg"
                          onChange={props.getUserName}
                          onKeyPress={props.onEnterKey}/>
              </label>
            </Slide>
            <Slide right>
              <Button>
                <input type='button' value='submit'
                       onClick={props.onClick}
                       style={button}/>
              </Button>
            </Slide>
          </form>
        </div>
      </Background>
    </Fade>
  );
};

export default User;
