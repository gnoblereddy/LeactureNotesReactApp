import React from 'react';
import { Link } from 'react-router-dom';
// import Button from 'material-ui/Button';
// import TextField from 'material-ui/TextField';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value.toLowerCase() });
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    submitLoginForm = (e) => {
        e.preventDefault();
        this.props.submitLoginForm(this.state);
    }

    render() {
        return (
            <div>
                <form method='post' onSubmit={this.submitLoginForm} >
                    <input id='loginEmail' type='text' name='email' label='Email' onChange={this.handleChangeUsername} />
                    <br />
                    <input id='loginPassword' type='password' name='password' label='Password' onChange={this.handleChangePassword} />
                    <br />
                    <button id='signinBtn' raised color='primary' type='submit'>Sign In</button>
                </form>
                <br />
                <p>Not Registered: <Link to={'/'}>Sign Up</Link> </p>
            </div>
        )
    }
}

export default LoginForm;