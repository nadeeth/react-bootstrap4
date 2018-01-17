import React, { Component } from 'react';
import './App.css';

import Alert from './bootstrap_components/Alert';
import Button from './bootstrap_components/Button';

import { Modal, ModalHeader, ModalBody, ModalFooter } from './bootstrap_components/Modal';

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

        <Alert classes="alert-primary" onClick={this.showModal}>This is a primary alert—check it out!</Alert>
        <Alert classes="alert-success">This is a primary alert—check it out!</Alert>

        <Button classes="btn-primary" dataToggle="modal" dataTarget="#exampleModal">
          Launch demo modal
        </Button>

        <Modal ref="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <ModalHeader>
            <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <ModalBody> ... </ModalBody>
          <ModalFooter>
            <Button classes="btn-secondary" dataDismiss="modal">Close</Button>
            <Button classes="btn-primary">Save changes</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default App;
