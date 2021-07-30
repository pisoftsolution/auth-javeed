import React from 'react';
import './App.css';
import Login from './components/auth/login/login';
import Signup from './components/auth/signup/signup';
import Logout from './components/auth/logout/logout';
import EmailVerifyComponent from './components/auth/signup/verify/email';
import PhoneVerifyComponent from './components/auth/signup/verify/phone';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/verify/email' component={EmailVerifyComponent} />
        <Route exactepath='/verify/phone' component={PhoneVerifyComponent} />
        </Switch>
    </div>
  );
}

export default App;
