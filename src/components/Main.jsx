import React, {Component, Fragment} from 'react';
import User from './User.jsx';
import {hot} from 'react-hot-loader/root';
import Loadable from 'react-loadable';
import ReactLoading from './Loading.jsx';
import DataProvider from '../providers/Data.jsx';


const LoadableGateway = Loadable({
  loader: () => import('./Gateway.jsx'),
  loading() {
    return <ReactLoading/>
  }
});


class Main extends Component {

  state = {
    init: false,
    guestName: ''
  };


  getUserName = (e) => {
    this.setState({guestName: e.target.value});
  };

  handleClick = () => {
    this.setState({init: true});
    localStorage.setItem('user', this.state.guestName);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({init: true});
    }
    localStorage.setItem('user', this.state.guestName);
  };

  getLocalStorageUser = () => {
    if (localStorage.hasOwnProperty('user')) {
      let existingUser = localStorage.getItem('user');
      this.setState({
        guestName: existingUser,
        init: true
      });
    }
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.guestName === nextState.guestName;
  }

  componentWillMount() {
    this.getLocalStorageUser();
  }

  render() {
    return (
      <DataProvider>
        <Fragment>
          {
            !this.state.init &&
            <User onClick={this.handleClick} getUserName={this.getUserName}
                  onEnterKey={this.handleKeyPress}/>
          }
          {
            this.state.init &&
            <LoadableGateway user={this.state.guestName} mobile={this.state.mobile}/>
          }
        </Fragment>
      </DataProvider>
    )
  }
}

export default hot(Main);