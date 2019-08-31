import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './form';
import { loginUserAction } from './action';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.onSuccess && nextprops.onSuccess !== null) {
            this.props.history.push('/dashboard');
        }
    }

    submitLoginForm = (loginRequestData) => {
        this.setState({ isLoading: true });
        console.log("loginRequestData container---- ", loginRequestData);
        this.props.loginUserAction(loginRequestData);
    }

    render() {
        return (
            <div>
                <LoginForm submitLoginForm={this.submitLoginForm} />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps---------', state);
    return {
        isLoading: state.login.isLoading,
        onSuccess: state.login.onSuccess,
        onError: state.login.onError
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps---------');
    return {
        loginUserAction: (loginRequestData) => dispatch(loginUserAction(loginRequestData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);