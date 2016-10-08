import React, {Component} from 'react';
import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import IndexList from '../pages/IndexList';
import Topic from '../pages/Topic';
import './App.css';
import * as reducers from '../reducers';
import Root from './Root';

let middleware = [thunk];
let reducer = combineReducers(reducers);

let finalCreateStore = compose(
    applyMiddleware(...middleware)
)(createStore);

let store = finalCreateStore(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                    <Router history={browserHistory}>
                        <Route path="/" component={Root}>
                            <IndexRoute component={IndexList}/>
                            <Route path="topic/:id" component={Topic}/>
                        </Route>
                    </Router>
            </Provider>
        );
    }
}