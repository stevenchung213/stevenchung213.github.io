import React from 'react';


const Anchor = ({section}) => {

  const general = {
    height: '62px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  };

  return (
    <div id={section + '-nav'} className='anchors' style={general}></div>
    );
};

export default Anchor;