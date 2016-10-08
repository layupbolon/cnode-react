import merged from 'obj-merged';
import simpleFetch from 'simple-fetch';

let Tool = {};

const getJson = simpleFetch.getJson;

Tool.dataFormat = (str) => {
    var date = new Date(str);
    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';
    } else if (time / 1000 < 60) {
        return '刚刚';
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000), 0) + '分钟前';
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000, 0) + '小时前';
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000, 0) + '天前';
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000, 0) + '月前';
    } else {
        return parseInt(time / 31536000000, 0) + '年前';
    }
}

Tool.randomData = ()=> {
    return Math.random().toString(36).substr(2);
}

/*
 @success 回调函数
 @setting 请求的配置
 @oldData 原始数据
 */
Tool.getTopicData = (success, setting = {}, oldData = []) => {
    let data = [];
    let defaultSetting = {
        page: 1,
        limit: 10,
        tab: "all"
    }
    let newSetting = merged(defaultSetting, setting);

    let url = Tool.reqUrl + Tool.getTopicsApi + '?';
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
    getJson(url).then(function (obj) {
        if (obj.success) {
            data = oldData.concat(obj.data);
            success(data);
        } else {
            console.error("获取数据出错");
        }
    });
}

Tool.getTopicById = (id, success)=> {
    let url = Tool.reqUrl + Tool.getTopicByIdApi + id + '?'+ Tool.randomData();
    getJson(url).then((obj)=> {
        if (obj.success) {
            success(obj.data);
        } else {
            console.error("获取数据出错");
        }
    });
}
export default Tool;
