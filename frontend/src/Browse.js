import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Item from './Item';
import Search from './Search';

class Browse extends Component {
  render() {
    return (
      <div>
        <div>
          <Item />
          <Search />
        </div>
      </div>
    );
  }
}

export default Browse;
