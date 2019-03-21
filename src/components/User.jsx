import React from 'react';
import styled from 'styled-components';
import {MDBIcon, MDBInput} from "mdbreact";
import {Slide} from 'react-reveal';


const User = (props) => {

  const Background = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/background.webp");
    background-size: contain;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
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
    width: 'auto',
    height: 40,
    color: 'black',
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: 'white'
  };
  const warning = {
    display: 'inline-flex',
    width: '100%',
    margin: '2vh auto',
    justifyContent: 'center'
  };

  return (
    <Background>
      <div style={warning}>
        <MDBIcon icon="exclamation-triangle fa-lg" className='white-text' style={{paddingRight: '1vw', paddingTop: '0.5vh'}}/>
        <h5 className='h5-responsive' style={{color: 'white', fontWeight: 900, paddingTop: '0.25vh'}}>
          DESIGNED FOR CHROME
        </h5>
        <MDBIcon icon="exclamation-triangle fa-lg" className='white-text' style={{paddingLeft: '1vw', paddingTop: '0.5vh'}}/>
      </div>
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
  );
};

export default User;
