import React, {Component} from 'react';
import classes from './App.css';
import LoginPrompt from './containers/LoginPrompt/LoginPrompt';
import Logout from './containers/Auth/Logout/Logout';
import Home from './containers/Home/Home';
import {connect} from 'react-redux';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/action/index';

class App extends Component {

    componentDidMount() {
        this.props.onCheckAuthStatus();
    }

    render() {
        let routes = (
            <Switch>
                <Route path='/login' component={LoginPrompt}/>
                <Route path='/' component={LoginPrompt}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.loggedIn) {
            routes = (
                <Switch>
                    <Route path='/login' component={LoginPrompt}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/' component={LoginPrompt}/>
                    <Redirect to="/"/>
                </Switch>
            )
        }
        return (
            <div className={classes.App}>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.token !== null
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckAuthStatus: () => dispatch(actions.checkAuthState())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
