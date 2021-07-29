import './App.css';
import LoginComponent from "./components/auth/login/login";
import SignupComponent from "./components/auth/signup/signup";
import { Route ,Switch} from 'react-router-dom';

function App() {

  return(
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginComponent}/>
          <Route exact path="/signup" component={SignupComponent}/>
        </Switch>
       
      </div>
  )
}
export default App;
