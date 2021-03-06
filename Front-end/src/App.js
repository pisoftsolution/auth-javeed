import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/auth/login/login';
import Signup from './components/auth/signup/signup';
import Logout from './components/auth/logout/logout';
import EmailVerifyComponent from './components/auth/signup/verify/email';
import HomeComponent from './components/home/home';
import PhoneVerifyComponent from './components/auth/signup/verify/phone';
import Blog from './components/blogs/blog';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/verify/email" component={EmailVerifyComponent} />
        <Route exact path="/verify/phone" component={PhoneVerifyComponent} />
      </Switch>
    </div>
  );
}

export default App;
