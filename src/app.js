import React from 'react';
// import { hot } from 'react-hot-loader';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import LoginContainer from './components/login/container';
import SignUpFormContainer from './components/signUp/container';
import DashboardContainer from './components/dashboard/container';

const AppRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={LoginContainer}/>
                    <Route exact path='/' component={SignUpFormContainer}/>
                    <Route exact path='/dashboard' component={DashboardContainer}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

// export default hot(module)(AppRoutes);
export default AppRoutes