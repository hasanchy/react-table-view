import React, { Component } from 'react';

class ActionButtons extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	componentDidMount(){
		
		if( !this.props.data.api_response ){
			console.log( 'Fetching expand data' );
			this.props.data['api_response'] = {
				"data":{
					"first_name":"Hasan",
					"last_name":"Chowdhury"
				}
			}
		}
		
	}
	
	render(){
		return(
			<span className="btn-group">
				<a className="btn btn-default bold m-l-5">
					<i className="fal fa-fw fa-pencil"></i>
					<span>Edit</span>
				</a>
			</span>
		);
	}
}

export default ActionButtons;