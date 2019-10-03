import React, { Component } from 'react';


class SelectBox extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        if('onLoad' in this.props) {
            this.props.onLoad(this.props.name, this.getSelectedValue(), this.props.parent);
        }
    }

    getSelectedValue = () => {
        let value = this.props.value;
        if (!value) {
            value = this.props.options[0].value;
        }
        return value;
    }

    handleChange = (e) => {
        //this.props.onChange($(e.target).val(), this.props.parent);
    }

    buildOptions = () => {
        let options = this.props.options.map((option, key) => {
            return <option key={`${this.props.name}_${key}`} value={option.value}>{option.label || option.value}</option>
        });
        return options;
    }

    render() {
        return (
            <select className="form-control" style={{ WebkitAppearance: 'menulist-button' }} value={this.props.value} onChange={this.handleChange}>
		        { this.buildOptions() }
		    </select>
        )
    }

}

export default SelectBox;

