import React, { Component } from 'react';
import itemImage from './cutlery.jpg';

// Need to get picture of item from img folder
// but this is handled from backend

class Item extends Component {
  render() {
    return (
      <div class="ui action input">
        <input type="text" placeholder="Search...">
        <select class="ui compact selection dropdown">
          <option value="all">All</option>
          <option selected="" value="articles">Articles</option>
          <option value="products">Products</option>
        </select>
        <div class="ui button">Search</div>
      </div>
    );
  }
}
