import React from 'react';
import { Link } from 'react-router-dom';

export default class DashboardForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>User Details</h1>
                <h4>User Name : {this.props.loginData.hasEmail.name.toUpperCase()}</h4>
                <h4>Email Id : {this.props.loginData.username.toUpperCase()}</h4>
                <h4>Phone No : {this.props.loginData.hasEmail.mobileNumber.toUpperCase()}</h4>
                <p>Logout: <Link to={'/'}>logout</Link> </p>
            </div>
        )
    }
}