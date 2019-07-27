import React, { Component } from 'react';
import itemImage from './img/cutlery.jpg';
import './css/Item.css';

// Need to get picture of item from img folder
// but this is handled from backend

class Item extends Component {
  render() {
    return (
      <div className="ui card">
      <div className="image">
        <img src={itemImage} alt= "cutlery"/>
      </div>
      <div className="content">
        <a className="header">Cutlery set</a>
        <div className="meta">
          <span className="date">$5</span>
        </div>
        <div className="description">
          Be ecofriendly when you snack on the go.
        </div>
      </div>
      </div>
    );
  }
}
export default Item;
