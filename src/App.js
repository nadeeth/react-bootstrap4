import React, { Component } from 'react';
import './App.css';

import Alert from './components/Alert';
import Button from './components/Button';

import { Modal, ModalHeader, ModalBody, ModalFooter } from './components/Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.refs.modal.show();
  }

  render() {
    
    return (
      <div className="App">

        <Alert type="primary" onClick={this.showModal}>This is a primary alert—check it out!</Alert>
        <Alert type="success">This is a primary alert—check it out!</Alert>

        <Button type="primary" dataToggle="modal" dataTarget="#exampleModal">
          Launch demo modal
        </Button>

        <Modal ref="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <ModalHeader title="Modal title" />
          <ModalBody> ... </ModalBody>
          <ModalFooter>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default App;
