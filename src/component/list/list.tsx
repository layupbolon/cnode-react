import * as React from 'react';
import ListItem from '../listItem/listItem';

// import './list.css';

export namespace List {
    export interface Props {
        dataSource: any;
    }
    export interface State { }
}

export default class List extends React.Component<List.Props, List.State> {

    // renderItem(index:number, key:number|string) {
    //     console.log('index',index);
    //     return <ListItem key={key} model={this.props.dataSource[index]}/>
    // }

    render() {
        if (!this.props.dataSource || this.props.dataSource.length <= 0)
            return null;

        let items = this.props.dataSource.map(function (item, index) {
            return <ListItem key={index} model={item} />
        });

        return (
            <div>{items}</div>
            
        )
    }

    // shouldComponentUpdate(nextProps) {
    //     let { dataSource } = this.props;
    //     return dataSource.length !== nextProps.dataSource.length;
    // }
}