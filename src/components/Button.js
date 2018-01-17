import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function Button(props) {
  return (
      <button type="button" 
        className={'btn ' + props.classes} 
        onClick={props.onClick} 
        data-toggle={props.dataToggle} 
        data-dismiss={props.dataDismiss}
        data-target={props.dataTarget}>
          {props.children}
      </button>
  );
}

