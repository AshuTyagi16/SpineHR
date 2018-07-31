import React, {Component} from 'react';
import classes from './Layout.css';
import {connect} from 'react-redux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {

    render() {
        return (
            <div>
                <Toolbar
                    loggedIn={this.props.loggedIn}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.token !== null
    }
};

export default connect(mapStateToProps)(Layout);