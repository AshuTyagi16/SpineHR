import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    let navItems = null;

    if (props.loggedIn) {
        navItems = <ul className={classes.NavigationItems}>
            <NavigationItem link="/home">Home</NavigationItem>
            <NavigationItem link="/self">Self Service</NavigationItem>
            <NavigationItem link="/leave">Leave</NavigationItem>
            <NavigationItem link="/time">Time</NavigationItem>
            <NavigationItem link="/help">Help Desk</NavigationItem>
            <NavigationItem link="/logout">Logout</NavigationItem>
        </ul>
    }
    else {
        navItems = <ul className={classes.NavigationItems}>
            <NavigationItem link="/login">Login</NavigationItem>
        </ul>
    }
    return navItems;
};

export default navigationItems;