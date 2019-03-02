import React from 'react';
import styled from "styled-components";

const Wallpaper = () => {

  const Background = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/city_skyline.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  `;

  return (
    <Background/>
  );
};

export default Wallpaper;