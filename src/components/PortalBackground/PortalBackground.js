import React from 'react';
import classes from './PortalBackground.css';
import background from '../../assets/images/back.png';

const portalBackground = () => {
    return (
        <div className={classes.PortalBackground}>
            <img src={background} alt="Background"/>
        </div>
    )
};

export default portalBackground;