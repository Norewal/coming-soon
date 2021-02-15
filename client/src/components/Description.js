import React from 'react';
import "../styles/Description.css";
import Notification from "./Notification";
import PropTypes from "prop-types";

const Description = ({ text, src, alt, message, visible, level }) => {
    return (
        <div className="description-text">
            <p> {text} </p>
            <Notification 
            src={src} 
            alt={alt} 
            message={message} 
            visible={visible} 
            level={level} />
        </div>
    )
}

Description.propTypes = {
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    level: PropTypes.string.isRequired,
}

export default Description;