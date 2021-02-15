import React, { Component } from 'react';
import "../styles/Subscribe.css";
import PropTypes from "prop-types";

class Subscribe extends Component {

    state = {
        email: ""
    }

    handleChange = e => {
        this.setState({ email: e.target.value.trim() });  //trim = not be empty place inside the email address
    }
    
    handleSubmit = e => {
        e.preventDefault();  //not refreshing the page when the submit btn pressed

        //this is from backend
        if (this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
            .then(res => res.json())
            .then(json => {
                if (json.status === "subscribed") {
                    this.props.configureNotification("success")
                } else if (json.title === "Member Exists") {
                    this.props.configureNotification("warning")
                } else {
                    this.props.configureNotification("danger")
                }
                this.props.showNotification();
            })
            .catch(err => {
                console.log("error", err);
            })
        {/*this.props.changeLogoSpeed();*/}
            this.setState({ email: "" });
        }
    }

    
    
    render() {

        const { placeholder, buttonText } = this.props;

        return (
            <form className="subscribe" onSubmit={this.handleSubmit}>
                <input className="subscribe-email"
                aria-label="Enter Email Address"
                name="email"
                type="email"
                placeholder= {placeholder}
                onChange={this.handleChange}
                value={this.state.email}
                />
                <button className="subscribe-button" type="submit">
                    {buttonText}
                </button>
            </form>
        )
    }
}

Subscribe.propTypes = {
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    configureNotification: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
}

export default Subscribe;