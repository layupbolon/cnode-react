import React from 'react';

import './list.css';
import ReactRefresh from '../refresh/ReactReFresh.jsx';//下拉刷新
import ListItem from '../listItem/listItem';

class List extends ReactRefresh {

    render() {
        if (!this.props.dataSource || this.props.dataSource.length <= 0)
            return null;

        let items = this.props.dataSource.map(function(item, index) {
            return <ListItem key={index} model={item}/>
        });

        return (
            <div className="list_wrap" onScroll={this.viewDidScroll}>
                {items}
            </div>
        )
    }
}

export default List;
