import * as types from '../constants/actionTypes';

const initState: TopicData = {
    dataSource: [],
    page: 1,
    limit: 10,
    tab: "all",
    needFetch: true
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GetTopicData:
            return Object.assign({}, state, {dataSource: state.dataSource.concat(action.dataSource)});
        case types.NextPage:
            return Object.assign({}, state, {page: state.page + 1});
        case types.ClearState:
            return Object.assign({}, state, {dataSource: [], page: 1, limit: 10});
        case types.UpdateTab:
            return Object.assign({}, state, {tab: action.data});
        case types.ChangeFetchField:
            return Object.assign({}, state, {needFetch: action.data});
        default:
            return state;
    }
}