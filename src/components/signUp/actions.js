import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

import callSignUpApi from './services';

function setSignUpPending(isLoading) {
  return {
    type: SIGNUP_PENDING,
    isLoading
  };
}

function setSignUpSuccessData(successData) {
  return {
    type: SIGNUP_SUCCESS,
    successData
  };
}

function setSignUpErrorData(errorData) {
  return {
    type: SIGNUP_ERROR,
    errorData
  }
}

export const signUpAction = (registerData) => {
  return dispatch => {
    dispatch(setSignUpPending(true));
    dispatch(setSignUpSuccessData(null));
    dispatch(setSignUpErrorData(null));
    callSignUpApi(registerData, response => {
      dispatch(setSignUpPending(false));
      if (response.status) {
        dispatch(setSignUpSuccessData(response));
      } else {
        // dispatch(setSignUpErrorData(response.message));
      }
    });
  }
}