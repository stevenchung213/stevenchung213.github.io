import React from 'react';

const Filler = ({section}) => {

  const general = {
    height: '35vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%'
  };

  return (
    <div id={section.name} style={general}></div>
  );
};

export default Filler;
