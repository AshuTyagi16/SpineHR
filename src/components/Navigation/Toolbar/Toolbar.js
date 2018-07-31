import React from 'react';
import Logo from '../../../components/Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems
                    loggedIn={props.loggedIn}
                />
            </nav>
        </header>
    );
};

export default toolbar;