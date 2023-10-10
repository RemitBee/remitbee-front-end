import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
// import Home from './components/Home';
// import AdminHome from './components/AdminHome';
// import UserHome from './components/UserHome';
// import CustomerSignin from './components/CustomerSignin';
// import CustomerSignup from './components/CustomerSignup';
// import AdminSignIn from './components/AdminSignIn';
// import AdminSignUp from './components/AdminSignUp';
import AdminRegister from "./components/AdminRegister";
import AdminSignIn from "./components/AdminSignIn";
import StorePage from "./components/StorePage";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <Router>
      {/*<div className="App" style={{height:'100vh'}}>*/}
        <Switch>
          <Route exact path='/'>
            {/*<Home/>*/}
            {/*<AdminRegister/>*/}
              <AdminSignIn/>
              {/*<StorePage/>*/}
            {/*  <CurrencyConverter/>*/}
          </Route>
          {/*<Route exact path='/reader/signin'>*/}
          {/*  <AdminSignIn/>*/}
          {/*</Route>*/}
          {/*<Route exact path='/reader/signup'>*/}
          {/*  <AdminSignUp/>*/}
          {/*</Route>*/}
          {/*<Route exact path='/customer/signin'>*/}
          {/*  <CustomerSignin/>*/}
          {/*</Route>*/}
          {/*<Route exact path='/customer/signup'>*/}
          {/*  <CustomerSignup/>*/}
          {/*</Route>*/}
          {/*<Route path='/reader/home'>*/}
          {/*  <AdminHome/>*/}
          {/*</Route>*/}
          {/*<Route path='/customer/home'>*/}
          {/*  <UserHome/>*/}
          {/*</Route>*/}
        </Switch>
      {/*</div>*/}
    </Router>
  );
}

export default App;
