import React from 'react';
import classes from './LoginPrompt.css';
import PortalBackground from '../../components/PortalBackground/PortalBackground';
import Auth from '../../containers/Auth/Auth';

const loginPrompt = () => {
    return (
        <div className={classes.Container}>
            <PortalBackground/>
            <hr width="1" size="600"/>
            <Auth/>
        </div>
    );
};

export default loginPrompt;