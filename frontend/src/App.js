import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import './css/App.css';

/**
* import other components here
*/
import Nav from './Nav';
import Home from './Home';
import Browse from './Browse';
import Banner from './Banner';
import Login from './Login';
import SignUp from './SignUp';
// import Register from './Register';

import Cart from './Cart';
import Proceed from './Proceed';
// import Profile from './Profile'
// import Cart from './Cart';
import Explore1 from './Explore1';
import Explore from './Explore';
import Explore2 from './Explore2';
import Footer from './Footer';
import UserDashboard from './UserDashboard';
import BusinessDashboard from './BusinessDashboard';
import BusinessRegistration from './BusinessRegistration';
import BusinessList from './BusinessList';
import About from './About';



class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Nav />

      <div>


        <Route exact path='/' component={Home} />
        <Route path='/browse' component={Browse} />
        <Route path='/me' component={UserDashboard} />
        <Route path='/register-my-business' component={BusinessRegistration} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/cart' component={Cart} />
        <Route path='/proceed' component={Proceed} />
        <Route path='/businesslist' component={BusinessList} />
        <Route path='/sam' component={Explore} />
        <Route path='/bill' component={Explore1} />
        <Route path='/sally' component={Explore2} />
        <Route path='/my-dashboard' component={BusinessDashboard} />
        <Route path='/about' component={About}/>

      </div>
      </BrowserRouter>

    );
  }
}

export default App;
