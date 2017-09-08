import {combineReducers, Reducer} from 'redux';
import topic from './getTopicData';
import topicDetail from './getTopicDetailData';

export interface RootState {
    topic,
    topicDetail
}

export default combineReducers<RootState>({
    topic,
    topicDetail
});
