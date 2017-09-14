import * as React from 'react';
// import '../../iconfont/iconfont.css';
import './icon.css';

export namespace Icon{
    export interface Props{
        iconType:string;
        iconClassName:string;
    }
    export interface State{

    }
}

export default class Icon extends React.Component<Icon.Props,Icon.State> {
    render() {
        if (this.props.iconType) {
            return (
                <div className={"icon-" + this.props.iconType + "-background " + this.props.iconClassName}>
                    <i className={"iconfont icon-" + this.props.iconType}></i>
                </div>
            );
        }
        else {
          return null;
        }
    }
}