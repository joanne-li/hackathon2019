import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';


import './css/App.css';

/**
* import other components here
*/
import Nav from './Nav';
import Home from './Home';
import Browse from './Browse';

import Login from './Login';
import SignUp from './SignUp';

import Banner from './Banner';
// import Login from './Login';

// import Register from './Register';
// import Cart from './Cart';
import Dashboard from './Dashboard';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />

        <Route exact path='/' component={Home} />
        <Route path='/browse' component={Browse} />
        <Route path ='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
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
