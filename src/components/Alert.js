import React from 'react';

export default function Alert(props) {
  return (
      <div 
        className={'alert ' + props.classes} 
        role="alert" 
        onClick={props.onClick} >
          {props.children}
      </div>
  );
}
