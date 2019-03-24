import React from 'react';
import Loadable from 'react-loadable';
import ReactLoading from './Loading.jsx';


const LoadableNavBar = Loadable({
    loader: () => import(`./NavBar.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const LoadableWallpaper = Loadable({
    loader: () => import(`./Wallpaper.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const LoadableAnchor = Loadable({
    loader: () => import(`./Anchor.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const LoadableAbout = Loadable({
    loader: () => import(`./About.jsx`),
    loading() {
        return <ReactLoading/>
    }
});

const LoadableFiller = Loadable({
    loader: () => import(`./Filler.jsx`),
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

const Gateway = ({user}) => {

  return (
    <div id='gateway-container'>
      <LoadableNavBar/>
      <LoadableWallpaper user={user}/>
      <LoadableAnchor section={'about'}/>
      <LoadableAbout user={user}/>
      <LoadableFiller section={'tech'}/>
      <LoadableAnchor section={'tech'}/>
      <LoadableTech/>
      <LoadableFiller section={'projects'}/>
      <LoadableAnchor section={'projects'}/>
      <LoadableProjects/>
      <LoadableFiller section={'contact'}/>
      <LoadableAnchor section={'contact'}/>
      <LoadableContact/>
    </div>
  )
};

export default Gateway;
