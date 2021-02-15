import React from 'react';
import "../styles/Logo.css";
import PropTypes from "prop-types";


const Logo = ({alt, src}) => {
    return (
        <div className="logo-container">
            <img className="logo" alt={alt} src={src} />
        </div>
    )
}

Logo.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default Logo;