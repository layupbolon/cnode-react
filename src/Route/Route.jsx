import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import IndexList from '../pages/IndexList';
import Topic from '../pages/Topic';

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute component={IndexList} />
            <Route path="topic/:id" component={Topic} />
        </Route>
    </Router>
);

export default RouteConfig;