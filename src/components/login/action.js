import { SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR } from './constants';

import callLoginApi from './services';

function setLoginPending(isLoading) {
    console.log('setLoginPending------')
    return {
        type: SET_LOGIN_PENDING,
        isLoading
    };
}

function setLoginSuccess(successData) {
    return {
        type: SET_LOGIN_SUCCESS,
        successData
    };
}

function setLoginErrorData(errorData) {
    return {
        type: SET_LOGIN_ERROR,
        errorData
    }
}


export const loginUserAction = (loginData) => {
    console.log('loginUserAction action--', loginData);
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(null));
        dispatch(setLoginErrorData(null));
        callLoginApi(loginData, response => {
            console.log('loginUserAction action--', response);
            if (response.status) {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(response));
                dispatch(setLoginErrorData(null));
            } else {
                // dispatch(setLoginErrorData(response.result.message));
            }
        });
    }
}