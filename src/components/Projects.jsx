import React, {Component} from 'react';
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer} from "mdbreact";
import Modal from './Modal.jsx';


export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

    render() {
    const general = {
      height: 'auto',
      width: '100%',
      paddingTop: '2vh',
      paddingBottom: '1vh',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'black'
    };
    const titleBox = {
      width: 'auto',
      display: 'flex',
      padding: '1vh 1vw 1vh 1vw',
      justifyContent: 'center',
      color: 'white',
      marginBottom: 10
    };
    const projects = [
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/sucasa-small.png',
        name: 'Su Casa',
        description: 'Rental & Lodging App'
      },
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/zillwoah-small1.png',
        name: 'Zillwoah!',
        description: 'Real Estate App'
      },
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/mappins-small.png',
        name: 'My Map Pins',
        description: 'App using Google Maps API'
      },
      {
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/repofetcher-small.png',
        name: 'Github Repo Fetcher',
        description: 'App using Github API'
      }
    ];

    return (
      <div id='projects-container' style={general}>
        <MDBContainer>
          <div style={titleBox}>
            <h3 className='h3-responsive' style={{fontWeight: 900}}>
              - SOME OF MY PROJECTS -
            </h3>
          </div>
          <MDBCarousel activeItem={1} multiItem={false}
                       length={4} showControls={true}
                       showIndicators={false} thumbnails={false}
                       interval={false}>
            <MDBCarouselInner>
              {projects.map((project, i) =>
                <MDBCarouselItem itemId={i + 1} key={'project' + i+1}>
                  <div className="w-responsive mx-auto">
                    <div>
                      <MDBView className="w-auto">
                        <img className="mx-auto w-responsive" src={project.src}
                             alt={project.name}/>
                      </MDBView>
                    </div>
                    <div className='w-responsive mx-auto text-center p-1 mt-1'>
                      <h4 className="h4-responsive" style={{color: 'white'}}>{project.name}</h4>
                      <p style={{color: 'white', marginBottom: 5}}>{project.description}</p>
                      <Modal project={project.name} />
                    </div>
                  </div>
                </MDBCarouselItem>
              )}
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
};