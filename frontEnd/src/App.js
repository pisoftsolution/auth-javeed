import React from 'react';
import './App.css';
import LoginComponent from './components/auth/login/login';
import SignupComponent from './components/auth/signup/signup';
import LogoutComponent from './components/auth/logout/logout';
import EmailVerifyComponent from './components/auth/signup/verify/email';
import PhoneVerifyComponent from './components/auth/signup/verify/phone';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/signup' component={SignupComponent} />
        <Route exact path='/login' component={LoginComponent}/>
        <Route exact path='/logout' component={LogoutComponent} />
        <Route exact path='/verify/email' component={EmailVerifyComponent} />
        <Route exactepath='/verify/phone' component={PhoneVerifyComponent} />
        </Switch>
    </div>
  );
}

export default App;
