import * as React from 'react';
import { Link } from 'react-router-dom';

import {dataFormat} from '../../tool';
import {Icon,UserImage} from '../../component';
import './listItem.css';

export namespace ListItem{
    export interface Props{
        model:any;
    }
    export interface State{
    }
}

export default class ListItem extends React.Component<ListItem.Props,ListItem.State> {
    render() {
        return (
            <Link to={`/topic/${this.props.model.id}`}>
                <div className="listitem_wrap">
                    <div className="listitem_up">
                        <Icon
                            iconType={this.props.model.top ? "top" : this.props.model.good ? "good" : this.props.model.tab}
                            iconClassName="icon" />
                        <h4>{this.props.model.title}</h4>
                    </div>
                    <div className="listitem_down">
                        <div className="left">
                            <UserImage imgeUrl={this.props.model.author.avatar_url} />
                            <div className="autherInfo">
                                <p>{this.props.model.author.loginname}</p>
                                <p>{dataFormat(this.props.model.create_at)}</p>
                            </div>
                        </div>
                        <div className="right">
                            <p>{this.props.model.reply_count}/{this.props.model.visit_count}</p>
                            <p>{dataFormat(this.props.model.last_reply_at)}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    shouldComponentUpdate() {
        return false;
    }
}