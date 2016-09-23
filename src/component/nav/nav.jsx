import React,{Component} from 'react';

import './nav.css';

class Nav extends Component{

    render(){
        return (
            <header className="nav">
                <div className="navBack">
                    <a onClick={this.context.router.goBack}>
                        <i className="iconfont icon-fanhui"></i>
                    </a>
                </div>
                <h2>{this.props.title}</h2>
            </header>
        );
    }
}

Nav.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Nav;