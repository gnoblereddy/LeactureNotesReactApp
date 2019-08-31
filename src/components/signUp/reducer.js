import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';


const initialState = {
  isLoading: false,
  onSuccess: null,
  onError: null
};

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_PENDING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });

    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        onSuccess: action.successData
      });

    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        onError: action.errorData
      });

    default:
      return state;
  }
}