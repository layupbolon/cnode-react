import * as types from '../constants/actionTypes';
import {GetTopicData} from './GetTopicData';

function GetNextPage() {
    return {
        type: types.NextPage
    }
}

export function NextPage() {

    return (dispatch, getState) => {
        dispatch(GetNextPage());
        return dispatch(GetTopicData());
    }
}