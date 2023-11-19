import React from 'react';
//test
//test 2
import '../css/Button.css';

const Button = (props) => {

const classes = "button " + props.className
  return (
    <button
      className={classes}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;