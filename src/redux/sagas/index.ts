import {call, put, take, select} from 'redux-saga/effects';
import {setUrl, getData} from '../../service';
import {receiveData, receiveDetailData, GetNextPage} from '../actions';
import * as api from '../../service/constants';

function randomData() {
    return Math.random().toString(36).substr(2);
}

export function* getTopicData(): any {
    const topicState: TopicData = yield select(state => state.topic);
    const url: string = yield call(setUrl, topicState);
    if (topicState.needFetch) {
        const result = yield call(getData, `${url}${randomData()}`);
        if (result.success) {
            yield put(receiveData(result.data));
        }
    }
}

export function* getTopicDetailData(id: string): any {
    const url: string = `${api.ApiAddress}${api.GetTopicByIdApi}${id}?${randomData()}`;
    const result = yield call(getData, url);
    if (result.success) {
        yield put(receiveDetailData(result.data));
    }
}

export function* nextPage(): any {
    yield put(GetNextPage());
    yield call(getTopicData);
}