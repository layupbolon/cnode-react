import * as types from '../constants/actionTypes';

const initState = {
    dataSource: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case types.GetTopicDetailData:
            return Object.assign({}, state, {dataSource: action.dataSource});
        default:
            return state;
    }
}