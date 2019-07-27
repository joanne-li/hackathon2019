import React, { Component } from 'react';
import './css/Search.css';

// Need to get picture of item from img folder
// but this is handled from backend

class Search extends Component {
  render() {
    return (
      <div className="ui action input">
        <input type="text" placeholder="Search..."/>
        <select className="ui compact selection dropdown">
          <option value="all">All</option>
          <option selected="" value="articles">Articles</option>
          <option value="products">Products</option>
        </select>
        <div className="ui button">Search</div>
      </div>
    );
  }
}
export default Search;
