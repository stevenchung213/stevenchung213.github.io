import React from 'react';
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';


const Expanded = ({projectSelected, deSelectProject}) => {

    return (
      <div>
        <MDBModal isOpen={projectSelected} toggle={() => deSelectProject} centered>
          <MDBModalHeader toggle={() => deSelectProject}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={deSelectProject}>Close</MDBBtn>
            <MDBBtn color="primary">View Code</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    )
};

export default Expanded;
