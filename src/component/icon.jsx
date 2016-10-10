import React, {Component} from 'react';

import '../Iconfont/iconfont.css';
import './icon.css';

class Icon extends Component {
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

export default Icon;
