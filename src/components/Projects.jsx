import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import Expanded from './Expanded.jsx';

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render () {
    const general = {
      height: '65vh',
      width: '100%',
      paddingTop: '2vh',
      paddingBottom: '5vh',
      // backgroundColor: 'white',
      justifyContent: 'center',
      alignContent: 'center',
      overflow: 'auto'
    };
    const titleBox = {
      width: 'auto',
      display: 'flex',
      padding: '1vh 1vw 1vh 1vw',
      justifyContent: 'center'
    };
    const projects = [
      {
        title: 'GitHub Repos',
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/repofetcher-small.png'
      },
      {
        title: 'Zillwoah!',
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/zillwoah-small1.png'
      },
      {
        title: 'Su Casa',
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/sucasa-small.png'
      },
      {
        title: 'My Map Pins',
        url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/mappins-small.png'
      }
    ];

    return (
      <div id='projects-container' style={general}>
        <div style={titleBox}>
          <h3 style={{fontWeight: 900}}>
            - SOME OF MY PROJECTS -
          </h3>
        </div>
        <Coverflow displayQuantityOfSide={2}
                   enableScroll={true}
                   enableHeading={false}
                   clickable={true}
                   currentFigureScale={1.95}
                   otherFigureScale={0.8} >
          {projects.map((project, i) => {
            return (
              <div
                id={project.title}
                key={i}
                onClick={()=>this.props.clickProject(project.title)}
                role='menuitem'
                tabIndex={i} >
                <img src={project.url} alt={project.title} style={{display: 'block', width: '100%'}}/>
              </div>
            )
          })}
        </Coverflow>
        {this.props.projectSelected && <Expanded projectSelected={this.props.projectSelected} deSelectProject={this.props.deSelectProject} />}
      </div>
    );
  }
}

// const Projects = ({clickProject, projectSelected, deSelectProject}) => {
//
//   const general = {
//     height: 'auto',
//     width: '100%',
//     paddingTop: '2vh',
//     // backgroundColor: 'white',
//     justifyContent: 'center',
//     alignContent: 'center',
//     overflow: 'auto'
//   };
//   const titleBox = {
//     width: 'auto',
//     display: 'flex',
//     padding: '1vh 1vw 1vh 1vw',
//     justifyContent: 'center'
//   };
//   const projects = [
//     {
//       title: 'GitHub Repos',
//       url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/repofetcher-small.png'
//     },
//     {
//       title: 'Zillwoah!',
//       url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/zillwoah-small1.png'
//     },
//     {
//       title: 'Su Casa',
//       url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/sucasa-small.png'
//     },
//     {
//       title: 'My Map Pins',
//       url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/mappins-small.png'
//     }
//   ];
//
//   return (
//     <div id='projects-container' style={general}>
//       <div style={titleBox}>
//         <h3 style={{fontWeight: 900}}>
//           - SOME OF MY PROJECTS -
//         </h3>
//       </div>
//       { projectSelected &&
//       <MDBModal isOpen={projectSelected} toggle={()=>deSelectProject} centered>
//         <MDBModalHeader toggle={()=>deSelectProject}>MDBModal title</MDBModalHeader>
//         <MDBModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
//           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//           consequat.
//         </MDBModalBody>
//         <MDBModalFooter>
//           <MDBBtn color="secondary" onClick={deSelectProject}>Close</MDBBtn>
//           <MDBBtn color="primary">View Code</MDBBtn>
//         </MDBModalFooter>
//       </MDBModal>
//       }
//       <Coverflow displayQuantityOfSide={2}
//                  enableScroll={true}
//                  enableHeading={false}
//                  clickable={true}
//                  currentFigureScale={2}
//                  otherFigureScale={0.8} >
//         {projects.map((project, i) => {
//           return (
//             <div
//               id={project.title}
//               key={i}
//               onClick={()=>clickProject(project.title)}
//               role='menuitem'
//               tabIndex={i} >
//               <img src={project.url} alt={project.title} style={{display: 'block', width: '100%'}}/>
//             </div>
//           )
//         })}
//       </Coverflow>
//     </div>
//   );
// };
//
// export default Projects;
