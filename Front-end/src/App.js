import React from 'react';
import './App.css';
import Login from './components/auth/login/login';
import Signup from './components/auth/signup/signup';
import Logout from './components/auth/logout/logout';
import EmailVerifyComponent from './components/auth/signup/verify/email';
import HomeComponent from './components/home/home';
import PhoneVerifyComponent from './components/auth/signup/verify/phone';
import {Route, Switch} from 'react-router-dom';
import Blogs from './components/blogs/blogs';

 

function App() { 
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/blogs' component={Blogs}/>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/verify/email' component={EmailVerifyComponent} />
        <Route exact path='/verify/phone' component={PhoneVerifyComponent} />
        </Switch>
    </div>
  );
}

export default App;
