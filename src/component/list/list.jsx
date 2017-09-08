import React from 'react';

import './list.css';
import ReactReFresh from '../refresh/ReactReFresh';
import ListItem from '../listItem/listItem';

class List extends ReactReFresh {

    render() {
        if (!this.props.dataSource || this.props.dataSource.length <= 0)
            return null;

        let items = this.props.dataSource.map(function (item, index) {
            return <ListItem key={index} model={item}/>
        });

        return (
            <div className="list_wrap" onScroll={this.viewDidScroll}>
                {items}
            </div>
        )
    }

    shouldComponentUpdate(nextProps) {
        let {dataSource} = this.props;
        return dataSource.length !== nextProps.dataSource.length;
    }
}

export default List;