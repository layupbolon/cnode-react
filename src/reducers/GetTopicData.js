import * as types from '../constants/actionTypes';

const initState = {
    dataSource: [],
    page: 1,
    limit: 10,
    tab: "all",
    Needfetch:true
}

export default function (state = initState, action) {
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
            return Object.assign({}, state, {Needfetch: action.data});
        default:
            return state;
    }
}