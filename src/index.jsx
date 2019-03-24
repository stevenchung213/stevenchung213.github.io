import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './styles.css';
import Main from './components/Main.jsx';
import {AppContainer} from "react-hot-loader";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./components/Main.jsx', () => {
    render(Main);
  });
}
