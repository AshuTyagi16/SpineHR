import React, {Component} from 'react';
import classes from './LoginPrompt.css';
import PortalBackground from '../../components/PortalBackground/PortalBackground';
import Auth from '../../containers/Auth/Auth';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class LoginPrompt extends Component {

    render() {
        let content = (
            <div className={classes.Container}>
                <PortalBackground/>
                <hr width="1" size="600"/>
                <Auth/>
            </div>
        );

        if (this.props.loggedIn) {
            content = <Redirect to="/home"/>
        }
        return content;
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.token !== null
    }
};

export default connect(mapStateToProps)(LoginPrompt);