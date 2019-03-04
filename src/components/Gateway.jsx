import React from 'react';
import NavBar from './NavBar.jsx';
import Wallpaper from './Wallpaper.jsx';
import Anchor from './Anchor.jsx';
import About from './About.jsx';
import Filler from './Filler.jsx';
import Tech from './Tech.jsx';
import Projects from './Projects.jsx';
import Modal from './Modal.jsx';

const Gateway = ({user, projectSelected, project, selectProject, deSelectProject}) => {

  return (
    <div id='gateway-container'>
      <NavBar/>
      <Wallpaper/>
      <Anchor section={'about'}/>
      <About user={user}/>
      <Filler section={'tech'}/>
      <Anchor section={'tech'}/>
      <Tech/>
      <Filler section={'projects'}/>
      <Anchor section={'projects'}/>
      <Projects projectSelected={projectSelected}
                selectProject={selectProject}
                deSelectProject={deSelectProject}/>
      {/*{*/}
        {/*projectSelected &&*/}
        {/*<Modal projectSelected={projectSelected}*/}
               {/*project={project}*/}
               {/*selectProject={selectProject}*/}
               {/*deSelectProject={deSelectProject}/>*/}
      {/*}*/}
      <Filler section={'contact'}/>
      <Anchor section={'contact'}/>
    </div>
  )
};

export default Gateway;