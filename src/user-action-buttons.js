import React, { Component } from 'react';

class UserActionButtons extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render(){
        var unlockButton;
        if( this.props.data.status && this.props.data.status === "locked" ){
            unlockButton = <a className="btn btn-default bold m-l-5" data-toggle="tooltip" data-placement="top" data-container="body" title="Delete" style={{padding: "2px 10px 3px"}}>
                <i className="fas fa-fw fa-lock-open fa-flip-horizontal"></i>
            </a>
        }
        return(
            <span className="pull-right btn-group">
                {unlockButton}
                <a className="btn btn-default bold m-l-5" data-toggle="tooltip" data-placement="top" data-container="body" title="Delete" style={{padding: "2px 10px 3px"}}>
                    <i className="fas fa-fw fa-trash-alt"></i>
                </a>
                <a className="btn btn-primary bold m-l-5" style={{padding: "2px 10px 3px"}}  onClick={this.props.data.onEditClick.bind(this,this.props.data.id)}>
                    <i className="fas fa-fw fa-pencil"></i> Edit
                </a>
            </span>
        );
    }
}

export default UserActionButtons;