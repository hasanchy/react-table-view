import React, { Component } from 'react';


class RadioButton extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        if('onLoad' in this.props) {
            this.props.onLoad(this.props.name, this.getSelectedValue());
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
        this.props.onChange(this.props.name, $(e.target).val());
    }

    buildOptions = () => {
        let options = [];
		let checked;
		for (let i in this.props.options) {
			checked = this.props.options[i].value === this.props.value;
			options.push(
                <div style={{marginBottom: '10px', marginTop: '10px'}} key={Math.random()}>
                    <label htmlFor={'radio'+this.props.options[i].value} className="radio-inline" key={Math.random()}>
                        <input type="radio" checked={checked} value={this.props.options[i].value} name={'radio'+this.props.options[i].value} key={Math.random()} onChange={ this.handleChange }/>{this.props.options[i].label}
                    </label>
                </div> 
	        );
		}

		return options;
    }

    render() {
        return (
            <div>
		        {this.buildOptions()}
		    </div>
        )
    }

}

export default RadioButton;

