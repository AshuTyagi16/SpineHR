import React, {Component} from 'react';
import classes from './App.css';
import LoginPrompt from './containers/LoginPrompt/LoginPrompt';
import Logout from './containers/Auth/Logout/Logout';
import Home from './containers/Home/Home';
import {connect} from 'react-redux';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

class App extends Component {
    render() {
        const routes = (
            <Switch>
                <Route path='/login' component={LoginPrompt}/>
                <Route path='/logout' component={Logout}/>
                <Route path='/home' component={Home}/>
                <Route path='/' component={LoginPrompt}/>
                <Redirect to="/"/>
            </Switch>
        );
        return (
            <div className={classes.App}>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default withRouter(connect()(App));
