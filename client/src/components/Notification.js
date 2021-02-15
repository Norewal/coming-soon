import React, { Component } from 'react';
import PropTypes from "prop-types";

import "../styles/Notification.css";

class Notification extends Component {
    render() {
        return (
            <div className={`notification ${this.props.level}${this.props.visible ? " visible" : ""}`}>
                <img src={this.props.src} alt={this.props.alt} />
                <p>{this.props.message}</p>
            </div>
        )
    }
}

Notification.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    level: PropTypes.string.isRequired,
}


export default Notification;
