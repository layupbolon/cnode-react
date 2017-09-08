declare interface TopicData {
    dataSource: DataSource,
    page: 1,
    limit: 10,
    tab: TabType,
    needFetch: true
}

declare type DataSource = Array;

declare type TabType = 'all' | 'good' | 'share' | 'ask' | 'job';

declare interface TopicDetailData {
    dataSource: DataSource
}