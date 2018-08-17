import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import authReducer from './store/reducer/auth';
import WebFont from 'webfontloader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
    google: {
        families: ['Montserrat:300i', 'Roboto:300,400,500', 'Open+Sans:400,600,700', 'sans-serif']
    }
});

const rootReducer = combineReducers({
    authReducer: authReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

