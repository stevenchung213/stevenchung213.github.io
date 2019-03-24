import React from 'react';
import Wallpaper from './Wallpaper.jsx';
import Anchor from './Anchor.jsx';
import Filler from './Filler.jsx';
import Loadable from 'react-loadable';
import ReactLoading from './Loading.jsx';


const LoadableNavBar = Loadable({
    loader: () => import(`./NavBar.jsx`),
    loading() {
        return <ReactLoading/>
    },
    delay: 3000
});

const LoadableAbout = Loadable({
    loader: () => import(`./About.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const LoadableTech = Loadable({
    loader: () => import(`./Tech.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const LoadableProjects = Loadable({
    loader: () => import(`./Projects.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const LoadableContact = Loadable({
    loader: () => import(`./Contact.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const Gateway = ({user, mobile}) => {

  return (
    <div id='gateway-container'>
      <LoadableNavBar/>
      <Wallpaper user={user} mobile={mobile}/>
      <Anchor section={'about'}/>
      <LoadableAbout user={user}/>
      <Filler section={'tech'}/>
      <Anchor section={'tech'}/>
      <LoadableTech/>
      <Filler section={'projects'}/>
      <Anchor section={'projects'}/>
      <LoadableProjects/>
      <Filler section={'contact'}/>
      <Anchor section={'contact'}/>
      <LoadableContact/>
    </div>
  )
};

export default Gateway;
