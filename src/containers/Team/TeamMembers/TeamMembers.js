import React from 'react';
import TeamMember from './TeamMember/TeamMember';
import classes from './TeamMembers.css';

const teamMembers = (props) => {
    return (
        <div className={classes.Container}>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar2.png"/>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar.png"/>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar2.png"/>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar.png"/>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar2.png"/>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar.png"/>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar2.png"/>
            <TeamMember
                pic="https://www.w3schools.com/howto/img_avatar.png"/>
        </div>
    )
};

export default teamMembers;