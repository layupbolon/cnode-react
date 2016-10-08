import React, {Component} from 'react';

import Tool from '../../constants/tool';
import UserImage from '../../component/userImage/UserImage';
import Icon from '../../component/icon/icon';
import './TopicDetail.css';

class TopicDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: []
        }

        this.bindData = this.bindData.bind(this);

        Tool.getTopicById(props.id, this.bindData);
    }

    render() {
        if (!this.state.dataSource || this.state.dataSource.length < 1)
            return null;

        return (
            <div className="topicDetail">
                <div className="topicTopInfo">
                    <UserImage imgeUrl={this.state.dataSource.author.avatar_url}/>
                    <div className="authorInfo">
                        <p>
                            <span>{this.state.dataSource.author.loginname}</span>&nbsp;
                            <span>{Tool.dataFormat(this.state.dataSource.create_at)}</span>
                        </p>
                        <p>
                            阅读：{this.state.dataSource.visit_count} 回复：{this.state.dataSource.reply_count}
                        </p>
                    </div>
                    <Icon
                        iconType={this.state.dataSource.top ? "top" : this.state.dataSource.good ? "good" : this.state.dataSource.tab}
                        iconClassName="logo"/>
                </div>
                <div className="topicTitle"> {this.state.dataSource.title}</div>
                <div className="content markdown-body"
                     dangerouslySetInnerHTML={{__html: this.state.dataSource.content}}/>
                <div className="topicReply">共<span>{this.state.dataSource.reply_count}</span>条回复</div>
                <ul>
                    {
                        this.state.dataSource.replies.map((item, index)=> {
                            return (
                                <li key={index}>
                                    <div className="replyTop">
                                        <div className="replyAuthorImage">
                                            <UserImage imgeUrl={item.author.avatar_url}/>
                                        </div>
                                        <div className="replyInfo">
                                            <div className="left">
                                                <span>{item.author.loginname}</span> {Tool.dataFormat(item.create_at)}
                                            </div>
                                            <div className="floor">#{index + 1}</div>
                                        </div>
                                        <div className="replyContent content markdown-body"
                                             dangerouslySetInnerHTML={{__html: item.content}}/>
                                    </div>
                                    <div className="replyDown">
                                        <i className="iconfont icon-dianzan"></i>
                                        <i className="iconfont icon-huifu"></i>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    bindData(data) {
        this.setState({dataSource: data});
    }
}

export default TopicDetail;