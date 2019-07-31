import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {

    onInputChange = (e) => {
        if(this.props.onChange){
            this.props.onChange(e);
        }
    }

    render() {
        return (
            <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            className="form-control"
            value={this.props.value}
            onChange={this.onInputChange}
        >

        </input>
        )
    }
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value : PropTypes.any,
    placeholder : PropTypes.string
}

Input.defaultProps = {
    type: 'text'
}