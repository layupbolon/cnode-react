import * as React from 'react';
import { connect } from 'react-redux';

import { Head, List } from '../component';
import { GetNextPage, UpdateTab, receiveData, ClearState, ChangeFetchField, FetchData } from '../redux/actions';

export namespace IndexList {
    export interface Props {
        UpdateTab: Function;
        GetTopicData: Function;
        ChangeFetchField: Function;
        ClearState: Function;
        NextPage: Function;
        location: any;
        dataSource: any;
    }
    export interface State { }
}

class IndexList extends React.Component<IndexList.Props, IndexList.State> {
    constructor(props) {
        super(props);

        this.freshData = this.freshData.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);

        this.props.UpdateTab(props.location.query ? props.location.query.tab : 'all');
    }

    render() {
        let { location, dataSource } = this.props;

        return (
            <div>
                <Head tab={location.query ? location.query.tab : 'all'} />
                <List dataSource={dataSource} />
            </div>
        );
    }

    componentDidMount() {
        // this.request = this.props.GetTopicData();
        this.props.GetTopicData();
        this.props.ChangeFetchField(true);
    }

    // componentWillUnMount() {
    //     this.request.abort();
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.location.query.tab !== this.props.location.query.tab) {
    //         this.props.UpdateTab(nextProps.location.query.tab);
    //         this.props.ClearState();
    //         this.props.GetTopicData();
    //     }
    // }

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
        NextPage: () => dispatch(GetNextPage()),
        UpdateTab: (tab) => dispatch(UpdateTab(tab)),
        GetTopicData: () => dispatch(FetchData()),
        ClearState: () => dispatch(ClearState()),
        ChangeFetchField: (data) => dispatch(ChangeFetchField(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexList);
