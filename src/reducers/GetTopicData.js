import * as types from '../constants/actionTypes';

const initState = {
    dataSource: [],
    page: 1,
    limit: 10,
    tab: "all"
}

export default function (state = initState, action) {
    switch (action.type) {
        case types.GetTopicData:
            return Object.assign({}, state, { dataSource: action.dataSource });
        default:
            return state;
    }
}