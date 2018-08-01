import React from 'react';
import {FaHandshake} from 'react-icons/fa'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'
import {MdInsertEmoticon} from 'react-icons/md'
import {MdGroup} from 'react-icons/md'
import classes from './CardHeader.css';

const cardHeader = ({color, text, pos}) => {
    let icon = null;
    switch (pos) {
        case 1:
            icon = <FaQuoteLeft
                size="1em"
                color="#ffffff"/>;
            break;
        case 2:
            icon = <MdInsertEmoticon
                size="1.5em"
                color="#ffffff"/>;
            break;
        case 3:
            icon = <FaCalendarAlt
                size="1.2em"
                color="#ffffff"/>;
            break;
        case 4:
            icon = <MdGroup
                size="1.5em"
                color="#ffffff"/>;
            break;
        case 5:
            icon = <FaHandshake
                size="1.5em"
                color="#ffffff"/>;
            break;
        default:
            icon = <MdInsertEmoticon
                size="1.5em"
                color="#ffffff"/>;
            break;
    }
    return (
        <div className={classes.Container} style={{background: color}}>
            {icon}
            <p className={classes.Text}>{text}</p>
        </div>
    )
};

export default cardHeader;