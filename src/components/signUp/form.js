import React from 'react';
import { Link } from 'react-router-dom';
// import TextField from 'material-ui/TextField';
// import Button from 'material-ui/Button';

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mobileNumber: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleMobileNumberChange = (e) => {
        this.setState({ mobileNumber: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({ confirmPassword: e.target.value });
    }

    submitRegistration = (e) => {
        e.preventDefault();
        this.props.submitRegistration(this.state);
    }

    render() {
        return (
            <div>

                <form method="post" onSubmit={this.submitRegistration}>
                    <input id="signupUserName" type="text" name="name" label="Name" onChange={this.handleNameChange} />
                    <input id="signupPhone" type="text" name="phone number" label="Phone Number" onChange={this.handleMobileNumberChange} />
                    <input id="signupEmail" type="text" name="email" label="Email" onChange={this.handleEmailChange} />
                    <input id="signupPassword" type="password" name="password" label="Password" onChange={this.handlePasswordChange} />
                    <input id="signupPswdReconf" type="password" name="confirm password" label="Confirm Password" onChange={this.handleConfirmPasswordChange} />

                    <div className="btnDiv">
                        <button id="signupBtn" raised color="primary" className="button" type="submit" >Sign Up</button>
                        <br />
                        <p>Already Registered: <Link to={'/login'}>Sign In</Link> </p>
                    </div>
                </form>

            </div>
        )
    }

}
