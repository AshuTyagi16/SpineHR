import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/home">Home</NavigationItem>
            <NavigationItem link="/self">Self Sevice</NavigationItem>
            <NavigationItem link="/leave">Leave</NavigationItem>
            <NavigationItem link="/time">Time</NavigationItem>
            <NavigationItem link="/help">Help Desk</NavigationItem>

            {
                props.loggedIn ? <NavigationItem link="/logout">Logout</NavigationItem> :
                    <NavigationItem link="/login">Login</NavigationItem>
            }

        </ul>
    );
};

export default navigationItems;