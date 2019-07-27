import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


import Footer from './Footer';
import Item from './Item';
import Search from './Search';
import ProductList from './ProductList';


class Browse extends Component {
  render() {
    return (
      <div>
         <ProductList/>
         <button class="ui button"><NavLink to="./cart" style={{color: 'white'}}>Shopping Cart</NavLink></button>
         <Footer/>
      </div>
    );
  }
}


export default Browse;
