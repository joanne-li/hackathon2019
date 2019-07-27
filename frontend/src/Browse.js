import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import {Grid, Segment} from 'semantic-ui-react'


import Nav from './Nav';
import Footer from './Footer';
import Item from './Item';
import Search from './Search';
import ProductList from './ProductList';


class Browse extends Component {
  render() {
    return (
      <div>
        <div>
          <ProductList/>
        </div>
      </div>
    );
  }
}


export default Browse;
