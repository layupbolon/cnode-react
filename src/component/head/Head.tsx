import * as React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

export namespace Head {
    export interface Props {
        tab: string;
    }
    export interface State {

    }
}

export default class Head extends React.Component<Head.Props,Head.State> {
    render() {
        let { tab } = this.props;

        return (
            <nav className="head">
                <ul>
                    <li>
                        <Link to="/" className={!tab && "active"}>全部</Link>
                    </li>
                    <li>
                        <Link to="/?tab=good" className={tab === "good" && "active"}>精华</Link>
                    </li>
                    <li>
                        <Link to="/?tab=share" className={tab === "share" && "active"}>分享</Link>
                    </li>
                    <li>
                        <Link to="/?tab=ask" className={tab === "ask" && "active"}>问答</Link>
                    </li>
                    <li>
                        <Link to="/?tab=job" className={tab === "job" && "active"}>招聘</Link>
                    </li>
                </ul>
            </nav>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.tab !== nextProps.tab; //tab和之前的不一致，组件才需要更新，否则不更新，提升性能
    }
}