import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Head,List} from '../component';
import {NextPage,UpdateTab,GetTopicData, ClearState,ChangeFetchField} from '../unused/actions';

class IndexList extends Component {
    constructor(props) {
        super(props);

        this.freshData = this.freshData.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);

        this.props.UpdateTab(props.location.query.tab);
    }

    render() {
        let {location, dataSource} = this.props;

        return (
            <div>
                <Head tab={location.query.tab}/>
                <List dataSource={dataSource}
                      onScrollToTop={this.freshData}
                      onScrollToBottom={this.loadMoreData}
                />
            </div>
        );
    }

    componentDidMount() {
        this.request = this.props.GetTopicData();
        this.props.ChangeFetchField(true);
    }

    componentWillUnMount() {
        this.request.abort();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.query.tab !== this.props.location.query.tab) {
            this.props.UpdateTab(nextProps.location.query.tab);
            this.props.ClearState();
            this.props.GetTopicData();
        }
    }

    //上拉刷新数据
    freshData(completed) {
        setTimeout(function () {
            completed();
            this.props.ClearState();
            this.props.GetTopicData();
        }.bind(this), 1000);
    }

    //下拉翻页数据
    loadMoreData(completed) {
        setTimeout(function () {
            completed();
        }, 1000);
        this.props.NextPage();
    }
}

function mapStateToProps(state) {
    return {
        dataSource: state.topic.dataSource
    };
}

function mapDispatchToProps(dispatch) {
    return {
        NextPage: ()=>dispatch(NextPage()),
        UpdateTab: (tab)=>dispatch(UpdateTab(tab)),
        GetTopicData: ()=>dispatch(GetTopicData()),
        ClearState: ()=>dispatch(ClearState()),
        ChangeFetchField:(data)=>dispatch(ChangeFetchField(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexList);
