import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Head from '../component/head/Head';
import List from '../component/list/list';
import {GetTopicData} from '../actions/GetTopicData';

class IndexList extends Component {

    // static propTypes = {
    //     dataSource: PropTypes.array.isRequired,
    //     dispatch: PropTypes.func.isRequired
    // }

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         page: 1,
    //         dataSource: [],
    //         limit: 10,
    //         tab: this.props.location.query.tab || "all"
    //     };
    //
    //     this.freshData = this.freshData.bind(this);
    //     this.loadMoreData = this.loadMoreData.bind(this);
    //     this.bindData = this.bindData.bind(this);
    //
    //     Tool.getTopicData(this.bindData, this.state);
    // }

    // //只有当dataSource不同时才渲染组件
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.dataSource.length !== nextState.dataSource.length;
    // }

    render() {
        let {dataSource, location} = this.props;

        return (
            <div>
                <Head tab={location.query.tab}/>
                <List dataSource={dataSource}/>
                {/*onScrollToTop={this.freshData}*/}
                {/*onScrollToBottom={this.loadMoreData}/>*/}
            </div>
        );
    }

    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(GetTopicData());
    }

    // componentWillReceiveProps(nextProps) {
    //
    //     let newtab = nextProps.location.query.tab;
    //
    //     Tool.getTopicData(this.bindData, {
    //         page: 1,
    //         dataSource: [],
    //         limit: 10,
    //         tab: newtab
    //     });
    //     this.setState({
    //         page: 1,
    //         dataSource: [],
    //         limit: 10,
    //         tab: newtab
    //     });
    // }

    // //绑定数据（供工具类异步调用）
    // bindData(data) {
    //     this.setState({dataSource: data});
    // }
    //
    // //上拉刷新数据
    // freshData(completed) {
    //     setTimeout(function () {
    //         completed();
    //         this.setState({page: 1});
    //         Tool.getTopicData(this.bindData, this.state);
    //     }.bind(this), 1000);
    // }
    //
    // //下拉刷新数据
    // loadMoreData(completed) {
    //     setTimeout(function () {
    //         let nextPage = this.state.page + 1;
    //         this.setState({page: nextPage});
    //         let setting = {
    //             page: nextPage,
    //             tab: this.props.location.query.tab || "all"
    //         };
    //         completed();
    //         Tool.getTopicData(this.bindData, setting, this.state.dataSource);
    //     }.bind(this), 1000);
    // }
}

const getDataSource = state=> {
    return {
        dataSource: state.topic.dataSource
    }
}

export default connect(getDataSource)(IndexList);
