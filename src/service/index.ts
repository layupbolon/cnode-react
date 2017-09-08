import axios from 'axios';
import * as api from './constants';

export const setUrl = (setting = {}) => {
    let defaultSetting = {
        page: 1,
        limit: 10,
        tab: "all"
    };
    let newSetting = Object.assign(defaultSetting, setting);

    let url = api.ApiAddress + api.GetTopicsApi + '?';
    if (newSetting.page) {
        url += 'page=' + newSetting.page;
    }
    if (newSetting.tab) {
        url += '&tab=' + newSetting.tab;
    }
    else {
        url += '&tab=all';
    }
    if (newSetting.limit) {
        url += '&limit=' + newSetting.limit;
    }
    url += '&mdrender=false&';
    return url;
};

export const getData = (url: string) => {
    return axios.get(url);
};