import * as React from 'react';
import { connect } from 'react-redux';

import './TopicDetail.css';
import { dataFormat } from '../../tool';
import { UserImage, Icon } from '../../component';
import { receiveDetailData } from '../../redux/actions';

export namespace TopicDetail {
    export interface Props {
        receiveDetailData?: Function;
        dataSource?: any;
        id: string;
    }
    export interface State {
    }
}

class TopicDetail extends React.Component<TopicDetail.Props, TopicDetail.State> {

    componentDidMount() {
        this.props.receiveDetailData(this.props.id);
    }

    render() {
        let { dataSource } = this.props;

        if (!dataSource || dataSource.length < 1)
            return null;

        return (
            <div className="topicDetail">
                <div className="topicTopInfo">
                    <UserImage imgeUrl={dataSource.author.avatar_url} />
                    <div className="authorInfo">
                        <p>
                            <span>{dataSource.author.loginname}</span>&nbsp;
                            <span>{dataFormat(dataSource.create_at)}</span>
                        </p>
                        <p>
                            阅读：{dataSource.visit_count} 回复：{dataSource.reply_count}
                        </p>
                    </div>
                    <Icon
                        iconType={dataSource.top ? "top" : dataSource.good ? "good" : dataSource.tab}
                        iconClassName="logo" />
                </div>
                <div className="topicTitle"> {dataSource.title}</div>
                <div className="content markdown-body"
                    dangerouslySetInnerHTML={{ __html: dataSource.content }} />
                <div className="topicReply">共<span>{dataSource.reply_count}</span>条回复</div>
                <ul>
                    {
                        dataSource.replies.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="replyTop">
                                        <div className="replyAuthorImage">
                                            <UserImage imgeUrl={item.author.avatar_url} />
                                        </div>
                                        <div className="replyInfo">
                                            <div className="left">
                                                <span>{item.author.loginname}</span> {dataFormat(item.create_at)}
                                            </div>
                                            <div className="floor">#{index + 1}</div>
                                        </div>
                                        <div className="replyContent content markdown-body"
                                            dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </div>
                                    <div className="replyDown">
                                        <i className="iconfont icon-dianzan" />
                                        <i className="iconfont icon-huifu" />
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dataSource: state.topicDetail.dataSource
    };
}

function mapDispatchToProps(dispatch) {
    return {
        GetTopicDetailData: (id) => dispatch(receiveDetailData(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);