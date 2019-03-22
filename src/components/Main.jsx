import React, {Component, Fragment} from 'react';
import User from './User.jsx';
import Gateway from './Gateway.jsx';


export default class Main extends Component {

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

  checkWindowSize = () => {
    this.setState({
      mobile: window.innerWidth < window.innerHeight
    });
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.guestName === nextState.guestName;
  }

  componentWillMount() {
    this.getLocalStorageUser();
  }

  render() {
    return (
      <Fragment>
        {
          !this.state.init &&
          <User onClick={this.handleClick} getUserName={this.getUserName} onEnterKey={this.handleKeyPress}/>
        }
        {
          this.state.init &&
          <Gateway user={this.state.guestName} mobile={this.state.mobile}/>
        }
      </Fragment>)

  }
}
