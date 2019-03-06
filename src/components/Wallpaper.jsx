import React from 'react';
import styled from "styled-components";

const Wallpaper = ({user}) => {

  const Background = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/city_skyline.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  `;
  const general = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
    margin: 'auto',
    backgroundColor: 'black',
  };
  const intro = {
    background: 'black',
    maxWidth: '45vw',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    padding: 'auto'
  };
  const hello = {
    color: 'white',
    margin: '1vh 1vw',
    fontSize: '200%',
    textAlign: 'center',
    fontWeight: 800
  };
  const sub = {
    color: 'white',
    margin: 'auto',
    fontSize: '1rem',
    textAlign: 'center',
    fontWeight: 500
  };

  return (
    <div>
      <Background/>
      <div id='hello' style={general}>
        <div id='intro' style={intro}>
          <div>
            <h1 className='h1-responsive' style={hello}>
              HELLO {user === '' ? 'THERE,' : user + ','} I'M STEVE
            </h1>
          </div>
          <div>
            <p style={sub}>
              - FULL STACK SOFTWARE ENGINEER -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;