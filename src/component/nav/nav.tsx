import * as React from 'react';
import { connect } from 'react-redux';

import './nav.css';
import { ChangeFetchField } from '../../redux/actions';

export namespace Nav {
    export interface Props {
        title: string;
        ChangeFetchField?: any
    }
    export interface State {

    }
}

class Nav extends React.Component<Nav.Props, Nav.State> {

    render() {
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

    Goback() {
        this.props.ChangeFetchField(false);
        this.context.router.goBack();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ChangeFetchField: (data) => dispatch(ChangeFetchField(data))
    };
}

export default connect(null, mapDispatchToProps)(Nav);