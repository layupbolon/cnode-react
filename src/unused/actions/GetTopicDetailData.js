import * as types from '../constants/actionTypes';
import simpleFetch from 'simple-fetch';
import * as api from '../constants/ApiAddress';
import Tool from '../constants/tool';

const getJson = simpleFetch.getJson;

function receiveData(json) {
    return {
        type: types.GetTopicDetailData,
        dataSource: json
    }
}

function GetData(url) {
    return dispatch => {
        return getJson(url).then(obj=> {
            if (obj.success) {
                dispatch(receiveData(obj.data));
            } else {
                console.error("获取数据出错");
                Promise.resolve();
            }
        });
    }
}

export function GetTopicDetailData(id) {
    let url = api.ApiAddress + api.GetTopicByIdApi + id + '?' + Tool.randomData();
    return (dispatch, getState) => {
        return dispatch(GetData(url));
    }
}