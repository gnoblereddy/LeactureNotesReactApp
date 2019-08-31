import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './form';
import { signUpAction } from './actions';

class SignUpFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextprops) {
        // console.log("componentWillReceiveProps",nextprops);
        if (nextprops.onSuccess && nextprops.onSuccess !== null) {
            this.props.history.push('/login');
        }
        if (nextprops.onError) {
            this.props.history.push('/');
        }
    }

    submitRegistration = (formObject) => {
        formObject['userName'] = formObject['email'];
        // console.log(" formObject ", formObject);
        this.props.signUpAction(formObject);
    }

    render() {
        return (
            <div>
                <SignUpForm submitRegistration={this.submitRegistration} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('registrationData---', state)
    return {
        isLoading: state.registrationData.isLoading,
        onSuccess: state.registrationData.onSuccess,
        onError: state.registrationData.onError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpAction: (registrationFormData) => dispatch(signUpAction(registrationFormData))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);