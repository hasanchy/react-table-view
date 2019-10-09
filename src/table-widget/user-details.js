import React, { Component } from 'react';

class UserDetails extends Component {
    
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render(){
        
        return(
            <div style={{padding:"20px"}}>
                {this.props.data.description}
            </div>
        );
    }
}

export default UserDetails;