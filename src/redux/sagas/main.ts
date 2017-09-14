import { getTopicData, getTopicDetailData, nextPage } from './index';

export default function* rootSaga() {
    yield [
        getTopicData(),
        nextPage(),
    ];
}
