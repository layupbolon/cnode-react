import React, {Component} from 'react';

import './UserImage.css';

class UserImage extends Component{
    render(){
        return(
            <div className="userImage" style={{backgroundImage: 'url(' + this.props.imgeUrl + ')'}}></div>
        );
    }
}

export default UserImage;