import React from 'react';
import classes from './Logo.css';
import transformerLogo from '../../assets/images/logo.png';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={transformerLogo} alt="Logo"/>
        </div>
    );
};

export default logo;