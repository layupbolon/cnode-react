import React,{Component} from 'react';
import {connect} from 'react-redux';

import './nav.css';
import {ChangeFetchField} from '../../unused/actions/index';

class Nav extends Component{

    render(){
        return (
            <header className="nav">
                <div className="navBack">
                    <a onClick={this.Goback.bind(this)}>
                        <i className="iconfont icon-fanhui"></i>
                    </a>
                </div>
                <h2>{this.props.title}</h2>
            </header>
        );
    }

    Goback(){
        this.props.ChangeFetchField(false);
        this.context.router.goBack();
    }
}

Nav.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        ChangeFetchField: (data)=>dispatch(ChangeFetchField(data))
    };
}


export default connect(null, mapDispatchToProps)(Nav);