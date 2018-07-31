import React from 'react';
import classes from './Button.css';

const button = (props) => {
    return (
        <button
            disabled={props.disabled}
            className={classes.Button}>{props.text}</button>
    );
};

export default button;