import React, { Component } from 'react'

export default class Label extends Component {
    render() {
        return (
            <label>{this.props.text}</label>
        )
    }
}
