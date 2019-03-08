import React, {Component} from 'react';
import User from './User.jsx';
import Gateway from './Gateway.jsx';
import styled from 'styled-components';


export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      init: false,
      guestName: '',
      mobile: false
    };
  }

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
    window.removeEventListener("resize", this.checkWindowSize);
  }

  componentDidMount() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  }

  render() {

    const general = {
      height: '100vh',
      backgroundColor: 'black',
      fontFamily: 'Montserrat, serif',
    };
    const GatewayContainer = styled.div`
      background-color: black;
      height: 100vh;
    `;

    return (
      <div id="main-container" style={general}>
        {!this.state.init &&
        <User onClick={this.handleClick} getUserName={this.getUserName} onEnterKey={this.handleKeyPress}/>
        }
        {
          this.state.init &&
          <GatewayContainer>
            <Gateway user={this.state.guestName} mobile={this.state.mobile}/>
            <div>
            </div>
          </GatewayContainer>
        }
      </div>
    );
  }
}
