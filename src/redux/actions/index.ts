import * as types from '../constants/actionTypes';

export const receiveData = (json) => {
    return {
        type: types.GetTopicData,
        dataSource: json
    }
};

export const ClearState = () => {
    return {
        type: types.ClearState
    }
};

export const ChangeFetchField = (data) => {
    return {
        type: types.ChangeFetchField,
        data: data
    }
};

export const receiveDetailData = (json) => {
    return {
        type: types.GetTopicDetailData,
        dataSource: json
    }
};

export const GetNextPage = () => {
    return {
        type: types.NextPage
    }
};

export const UpdateTab = (tab) => {
    return {
        type: types.UpdateTab,
        data: tab
    }
};