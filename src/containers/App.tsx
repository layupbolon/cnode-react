import { debug } from 'util';
import * as React from 'react';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from '../redux/store'

import { IndexList, Topic } from '../pages';
// import Root from './Root';
import './App.css';

const store = configureStore();
const history = createBrowserHistory();

export default function () {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={IndexList} />
                    <Route path="topic/:id" component={Topic} />
                </Switch>
            </Router>
        </Provider>
    )
}