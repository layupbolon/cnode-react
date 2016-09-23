import React, {Component} from 'react';

import Nav from '../component/nav/nav';
import TopicDetail from '../component/TopicDetail/TopicDetail';

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