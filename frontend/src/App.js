import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

/**
* import other components here
*/
import Nav from './Nav';
import Home from './Home';
import Browse from './Browse';
// import Login from './Login';
// import Register from './Register';
// import Cart from './Cart';
// import Profile from './Profile';
import Footer from './Footer';
import UserDashboard from './UserDashboard';
import BusinessDashboard from './BusinessDashboard';
import BusinessRegistration from './BusinessRegistration';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/browse' component={Browse} />
        <Route path='/me' component={UserDashboard} />
        <Route path='/my-business' component={BusinessDashboard} />
        <Route path='/register-my-business' component={BusinessRegistration} />
        <Footer />
      </div>
      </BrowserRouter>

    );
  }
}

export default App;

/**

// <Nav />
// <Route exact path='/' component={Home} />
// <Route path='/browse' component={Browse} />
// <Route path='/login' component={Login} />
// <Route path='/register' component={Register} />
// <Route path='/cart' component={Cart} />
// <Route path='/me' component={Profile} />
// <Footer />  */
