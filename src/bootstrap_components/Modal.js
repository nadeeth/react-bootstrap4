import React, { Component } from 'react';
import $ from 'jquery';

export class Modal extends Component {

    show() {
        console.log("show modal " + this.props.id);
        $(this.refs[this.props.id]).modal('show');
    }

    render() {
        return (
            <div 
              ref={this.props.id}
              className={'modal fade ' + this.props.classes}
              id={this.props.id} 
              tabIndex={this.props.tabIndex} 
              role={this.props.role} 
              aria-labelledby={this.props.ariaLabelledby} 
              aria-hidden={this.props.ariaHideen}>
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      {this.props.children}
                  </div>
              </div>
          </div>
        );
    };
}

export function ModalHeader(props) {
    return (
      <div className="modal-header">
        {props.children}
      </div>
    );
}

export function ModalBody(props) {
    return (
      <div className="modal-body">
          {props.children}
      </div>
    );
}

export function ModalFooter(props) {
    return (
        <div className="modal-footer">
            {props.children}
        </div>
    );
}