import React, {Component} from 'react';

import {Nav,TopicDetail} from '../component';

class Topic extends Component {
    render() {
        return (
            <div>
                <Nav title="详情"/>
                <TopicDetail id={this.props.params.id}/>
            </div>
        );
    }
}

export default Topic;