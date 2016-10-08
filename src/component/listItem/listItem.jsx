import React, {Component} from 'react';
import {Link} from 'react-router';

import './listItem.css';
import Icon from '../icon/icon';
import Tool from '../../constants/tool';
import UserImage from '../userImage/UserImage';

class ListItem extends Component {
    render() {

        return (
            <Link to={`/topic/${this.props.model.id}`}>
                <div className="listitem_wrap">
                    <div className="listitem_up">
                        <Icon
                            iconType={this.props.model.top ? "top" : this.props.model.good ? "good" : this.props.model.tab}
                            iconClassName="icon"/>
                        <h4>{this.props.model.title}</h4>
                    </div>
                    <div className="listitem_down">
                        <div className="left">
                            <UserImage imgeUrl={this.props.model.author.avatar_url}/>
                            <div className="autherInfo">
                                <p>{this.props.model.author.loginname}</p>
                                <p>{Tool.dataFormat(this.props.model.create_at)}</p>
                            </div>
                        </div>
                        <div className="right">
                            <p>{this.props.model.reply_count}/{this.props.model.visit_count}</p>
                            <p>{Tool.dataFormat(this.props.model.last_reply_at)}</p>
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

export default ListItem;
