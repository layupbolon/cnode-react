import * as types from '../constants/actionTypes';
import simpleFetch from 'simple-fetch';
import merged from 'obj-merged';
import * as api from '../constants/ApiAddress';
import Tool from '../constants/tool';

const getJson = simpleFetch.getJson;

function receiveData(json) {
    return {
        type: types.GetTopicData,
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

function SetUrl(setting = {}) {
    let defaultSetting = {
        page: 1,
        limit: 10,
        tab: "all"
    }
    let newSetting = merged(defaultSetting, setting);

    let url = api.ApiAddress + api.GetTopicsApi + '?';
    if (newSetting.page) {
        url += 'page=' + newSetting.page;
    }
    if (newSetting.tab) {
        url += '&tab=' + newSetting.tab;
    }
    if (newSetting.limit) {
        url += '&limit=' + newSetting.limit;
    }
    url += '&mdrender=false&' + Tool.randomData();
    return url;
}

export function GetTopicData() {
    return (dispatch, getState) => {
        let url = SetUrl();
        return dispatch(GetData(url));
    }
}