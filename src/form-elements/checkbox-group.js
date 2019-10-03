import React, { Component } from 'react';
import Checkbox from './checkbox';

class CheckboxGroup extends Component{

	constructor(props) {
        super(props);
		var column = ( 'column' in this.props && this.props.column >= 1 && this.props.column <=4) ? this.props.column : 1;
		var value = ( 'value' in this.props ) ? this.props.value : [];
		this.state = {
			options: this.props.options, 
			value: value,
			column: column
		};
    }
    
    // componentWillReceiveProps( nextProps ){
	// 	if( JSON.stringify(this.props) !== JSON.stringify(nextProps) ){
	// 		var value = ( 'value' in nextProps ) ? nextProps.value : [];
	// 		this.setState({
	// 			options: nextProps.options,
	// 			value: value
	// 		});
	// 	}
	// }
    
    componentDidMount(){

		if ( 'onLoad' in this.props ){
			this.props.onLoad( this.state.value );
		}

	}
    
    shouldComponentUpdate( nextProps, nextState ){
		var shallComponentUpdate = ( JSON.stringify(this.state.options) !== JSON.stringify(nextState.options) || JSON.stringify(this.state.value) !== JSON.stringify(nextState.value) ) ? true : false;
		if ( JSON.stringify(this.state.value) !== JSON.stringify(nextState.value) ){
			this.props.onChange( nextState.value );
		}

		return shallComponentUpdate;

	}
    
    handleCheckboxChange = ( value, checked ) => {
        var groupValue = this.state.value.slice(0);
        if( checked === true){
            if( (groupValue.indexOf(value) == -1) ){
                groupValue.push(value);
                this.setState({
                    value: groupValue
                })
            }
        }else{
            var index = groupValue.indexOf(value);
            if( index !== -1 ){
                groupValue.splice(index, 1);
                this.setState({
                    value: groupValue
                })
            }
        }
    }
    
    handleCheckboxAllChange = ( value, checked ) => {
        var groupValue = this.state.value.slice(0);
        if( checked === true){
            var that = this;
            this.setState({
                value: that.getAllOptionValues()
            })
        }else{
            this.setState({
                value: []
            })
        }
    }
    
    getAllOptionValues = () => {
        var allValues = [];
        
        for( var i in this.state.options ){
            var value = this.state.options[ i ].value;
            allValues.push( value );
        }
        
        return allValues;
    }
    
    renderCheckboxes = () => {
        var checkbox = [];
        var columns = [];
		var columnClass = 12 / this.state.column;
		
		var totalCheckbox = this.state.options.length;
		
		var perColumn = Math.ceil(totalCheckbox / this.state.column);
		
		var thisColumn = 0;
		var columnId = 1;
        for( var i in this.state.options ){
            var value = this.state.options[i].value;
            var label = this.state.options[i].label;
            var checked = (this.state.value.indexOf(value) !== -1) ? true : false;
			// console.log( checked );
            checkbox.push(<Checkbox key={i} value={value} label={label} checked={checked} onLoad={this.handleCheckboxChange} onChange={this.handleCheckboxChange}/>);
        	
			thisColumn++;
			if( thisColumn == perColumn || (i == (totalCheckbox-1)) ){
				columns.push(<div key={columnId} className={"col-md-"+columnClass}>{checkbox}</div>);
				
				columnId++;
				thisColumn = 0;
				checkbox = [];
			}
		}
        
        return columns;
    }
    
	renderCheckboxAllOption = () => {
		if( 'checkAllLabel' in this.props ){ 
			var checked = ( this.state.options.length == this.state.value.length ) ? true : false;
			return <Checkbox value="all" label={this.props.checkAllLabel} checked={checked} onClick={this.handleCheckboxAllChange}/>
		}
	}
	
    render() {
        var className = ( 'className' in this.props ) ? this.props.className : '';
        var optionStyle = ( 'optionStyle' in this.props ) ? this.props.optionStyle : '';
		
		return (
            <div className={className}>
                {this.renderCheckboxAllOption()}
                <div style={optionStyle}>
                    {this.renderCheckboxes()}
                </div>
            </div>
        )

    }
    
}

export default CheckboxGroup;