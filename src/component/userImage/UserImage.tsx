import * as React from 'react';

import './UserImage.css';

export namespace UserImage{
    export interface Props{
        imgeUrl:string;
    }
    export interface State{}
}

export default class UserImage extends React.Component<UserImage.Props,UserImage.State>{
    render(){
        return(
            <div className="userImage" style={{backgroundImage: 'url(' + this.props.imgeUrl + ')'}}></div>
        );
    }
}