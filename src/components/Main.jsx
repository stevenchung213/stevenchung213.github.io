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

  // componentWillMount() {
  //   this.getLocalStorageUser();
  //   this.checkWindowSize();
  //   window.addEventListener("resize", this.checkWindowSize);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.checkWindowSize);
  // }

  componentDidMount() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  }

  render() {

    const General = styled.div`
      height: '100vh',
      fontFamily: 'Montserrat, serif',
      backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/my.portfolio/city_skyline.jpg")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    `;
    const GatewayContainer = styled.div`
      background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/city_skyline.jpg");
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;  
      height: 100vh;
    `;
    const GeneralMobile = styled.div`
      height: '100vh',
      fontFamily: 'Montserrat, serif',
      backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/my.portfolio/city_skyline_mobile.jpg")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    `;
    const GatewayContainerMobile = styled.div`
      background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/city_skyline_mobile.jpg");
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;  
      height: 100vh;
    `;

    let general;

    !this.state.mobile ? general =
        (<General>
          {
            !this.state.init &&
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
        </General>)
      :
      general =
        (<GeneralMobile>
          {
            !this.state.init &&
            <User onClick={this.handleClick} getUserName={this.getUserName} onEnterKey={this.handleKeyPress}/>
          }
          {
            this.state.init &&
            <GatewayContainerMobile>
              <Gateway user={this.state.guestName} mobile={this.state.mobile}/>
              <div>
              </div>
            </GatewayContainerMobile>
          }
        </GeneralMobile>);

    return (general);
  }
}
