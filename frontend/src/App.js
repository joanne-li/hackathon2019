import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter} from 'react-router-dom';
=======
import { BrowserRouter, Route} from 'react-router-dom';
>>>>>>> shopping
import './css/App.css';
import Item from './Item';
import Search from './Search';
import Shopping from './Shopping';
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


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/browse' component={Browse} />
        <Footer />
        <Item />
        <Search />
        <Shopping />
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
