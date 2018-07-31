import React from 'react';
import classes from './Loader.css';

const loader = ({loading}) => {
    return (
        loading ? (<div className={classes.LoaderContainer}>
                <div className={classes.Loader}/>
            </div>
        ) : null
    )
};

export default loader;