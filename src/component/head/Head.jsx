import React, {Component} from 'react';
import {Link} from 'react-router';

import './Head.css';

class Head extends Component {
    render() {
        return (
            <nav className="head">
                <ul>
                    <li>
                        <Link to="/" className={!this.props.tab && "active"}>全部</Link>
                    </li>
                    <li>
                        <Link to="/?tab=good" className={this.props.tab === "good" && "active"}>精华</Link>
                    </li>
                    <li>
                        <Link to="/?tab=share" className={this.props.tab === "share" && "active"}>分享</Link>
                    </li>
                    <li>
                        <Link to="/?tab=ask" className={this.props.tab === "ask" && "active"}>问答</Link>
                    </li>
                    <li>
                        <Link to="/?tab=job" className={this.props.tab === "job" && "active"}>招聘</Link>
                    </li>
                </ul>
            </nav>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.tab !== nextProps.tab; //tab和之前的不一致，组件才需要更新，否则不更新，提升性能
    }
}

export default Head;
