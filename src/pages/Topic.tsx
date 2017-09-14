import * as React from 'react';

import { Nav, TopicDetail } from '../component';

export namespace Topic {
    export interface Props {
        params: any;
    }
    export interface State { }
}

class Topic extends React.Component<Topic.Props, Topic.State> {
    render() {
        return (
            <div>
                <Nav title={"详情"} />
                <TopicDetail id={this.props.params.id} />
            </div>
        );
    }
}

export default Topic;