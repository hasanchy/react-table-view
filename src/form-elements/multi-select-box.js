import React, { Component } from 'react';


class MultiSelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
			multiSelectBoxId: "multiSelectBox" + Math.floor((Math.random() * 100000) + 1),
			options: this.props.options,
			value: this.filterSelectedValues( this.props )
		};
    }

    componentDidMount () {
        this.loadSelectBox( this.props );
		if ( 'onLoad' in this.props ){
			this.props.onLoad( this.state.value );
		}
    }
    
    loadSelectBox = ( props ) => {
        var that = this;
		var placeholder = ( typeof this.props.placeholder == "undefined" ) ? "Please choose the fields to display" : this.props.placeholder

		$( "#" + this.state.multiSelectBoxId ).select2({
			placeholder: placeholder,
			containerCss: {
				'max-height': 'initial',
				'border': '1px solid rgba(0, 0, 0, 0.07)',
				'overflow': 'visible',
				'line-height': '10px'
			},
			dropdownCss: {
				'border-color': 'rgba(0, 0, 0, 0.07)',
				'background-color': '#f5f5f5'
			}
		}).on('select2:select', function (e) {

			var element = e.params.data.element;
			var $element = $(element);

			$element.detach();
			$(this).append($element);
			$(this).trigger("change");

			that.handleSelection(this);
			e.preventDefault();

		}).on('select2:unselect', function (e) {

			that.handleSelection(this);
			e.preventDefault();
		});
    }
    
    handleSelection = ( obj ) => {
        var value = $(obj).val() || [];

		this.setState({
			value: value
		});
    }
    
    filterSelectedValues = ( props ) => {
		var value = [];
		for( i in props.value ){
			for( j in props.options ){
				if( props.value[i] === props.options[j].value ){
					value.push( props.value[i] );
					break;
				}
			}
		}
		return value;
	}
    
    componentWillReceiveProps ( nextProps ){
		if( JSON.stringify(this.props) !== JSON.stringify(nextProps) ){
			this.setState({
				options: nextProps.options,
				value: this.filterSelectedValues( nextProps )
			});
		}
	}
    
    shouldComponentUpdate( nextProps, nextState ){

		var shouldComponentUpdate = ( JSON.stringify(this.state.options) !== JSON.stringify(nextState.options) || this.state.value !== nextState.value ) ? true : false;

		if ( this.state.value !== nextState.value && 'onChange' in this.props ){
			this.props.onChange( nextState.value );
		}

		return shouldComponentUpdate;
	}
    
    buildSelectOptions = () => {

		var optionFields = this.state.value.slice(0); //Display the selected fields in the option first
		var fieldDisplayName = [];

		this.state.options.map( function ( optionObject ) {
			if( optionFields.indexOf( optionObject.value ) == -1 ){ //Get the remaining fields for the select option
				optionFields.push( optionObject.value );
			}
			fieldDisplayName[ optionObject.value ] = optionObject.label;
		});

		var options = [];
		optionFields.map( function ( value ) {
			options.push(<option key={Math.random()} value={value}>
				{fieldDisplayName[value]}
			</option>);
		});

		return options;

	}
    
    render() {
        return (
            <select id={this.state.multiSelectBoxId} name='fields' className='form-control' style={{ WebkitAppearance: 'menulist-button', width: '100%' }} multiple='multiple' value={this.state.value} key='fields'>
				{this.buildSelectOptions()}
			</select>
        )
    }

}

export default MultiSelectBox;