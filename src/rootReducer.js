import loginReducer from './components/login/reducer';
import signUpReducer from './components/signUp/reducer';
import dashboardReducer from './components/dashboard/reducer';

var rootReducer = {
    'login': loginReducer,
    'registrationData': signUpReducer,
    'dashboard': dashboardReducer
};

export default rootReducer;