import React from 'react';

const Filler = ({section}) => {

  const general = {
    height: '29vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%'
  };

  return (
    <div id={section} style={general}></div>
  );
};

export default Filler;
