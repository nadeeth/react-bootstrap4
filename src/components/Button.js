import React from 'react';

export default function Button(props) {
  return (
      <button type="button" 
        className={'btn btn-' + props.type + ' ' + props.classes} 
        onClick={props.onClick} 
        data-toggle={props.dataToggle} 
        data-target={props.dataTarget}>
          {props.children}
      </button>
  );
}

