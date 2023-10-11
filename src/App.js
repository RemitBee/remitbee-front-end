import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import SearchCurrency from './components/SearchCurrency';

function App() {
  return (
    <Router>
      {/*<div className="App" style={{height:'100vh'}}>*/}
        <Switch>
          <Route exact path='/'>
            {/*<Home/>*/}
            {/* <AdminRegister/>*/}
            {/*  <AdminSignIn/>*/}
            {/*  <StorePage/>*/}
            {/*  <CurrencyConverter/>*/}
            {/*  <MapLocation/>*/}
            {/*<ForgetPassword/>*/}
              <SearchCurrency/>
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
