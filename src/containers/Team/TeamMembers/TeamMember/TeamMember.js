import React from 'react';
import classes from './TeamMember.css';

const teamMember = (props) => {

    return (
        <div
            className={classes.Container}
            onClick={() => {

            }}>
            <div>
                <img className={classes.Image} src={props.pic} alt="Pro"/>
                <p className={classes.Text}>Ashu Tyagi</p>
                <p className={classes.Text}>534</p>
            </div>
        </div>
    );
};

export default teamMember;