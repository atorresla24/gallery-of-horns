import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
  render(){
  return(
  <Modal show={this.props.handleShow}
        onHide={this.props.handleOnHide} style = {{width: '100%'}}>
          <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className = 'img-fluid' src={this.props.selectedBeastImg} alt={this.props.selectedBeast}/>
          <p>{this.props.beastDescription}</p>
        </Modal.Body>
        </Modal>
  )
}
}
export default SelectedBeast