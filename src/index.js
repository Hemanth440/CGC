import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import "./assets/css/material-dashboard-react.css?v=1.8.0";
import App from './App';
import configureStore from './store/configure-store';
import Login from './views/login/login';
import SignUp from './views/SignUp/signUp';
import Main from './layouts/main';

const store = configureStore(thunk);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/main" component={Main} />
                    <Redirect from="/" to="/main/dashboard" />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
