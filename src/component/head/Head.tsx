import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';

import * as styles from './Head.css';

export namespace Head {
    export interface Props {
        tab: string;
    }
    export interface State {
    }
}

export default class Head extends React.Component<Head.Props, Head.State> {
    render() {
        let { tab } = this.props;

        console.log('tab', tab);
        return (
            <nav className={styles.head}>
                <ul>
                    <li>
                        <a href="/" className={
                            classNames({
                                [styles.active]: tab === 'all'
                            })}>全部</a>
                    </li>
                    <li>
                        <a href="/?tab=good" className={
                            classNames({
                                [styles.active]: tab === "good"
                            })}>精华</a>
                    </li>
                    <li>
                        <a href="/?tab=share" className={
                            classNames({
                                [styles.active]: tab === "share"
                            })}>分享</a>
                    </li>
                    <li>
                        <a href="/?tab=ask" className={
                            classNames({
                                [styles.active]: tab === "ask"
                            })}>问答</a>
                    </li>
                    <li>
                        <a href="/?tab=job" className={
                            classNames({
                                [styles.active]: tab === "job"
                            })}>招聘</a>
                    </li>
                </ul>
            </nav>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.tab !== nextProps.tab; //tab和之前的不一致，组件才需要更新，否则不更新，提升性能
    }
}