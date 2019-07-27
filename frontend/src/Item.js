import React, { Component } from 'react';
import itemImage from './img/cutlery.jpg';
import './item.css';

// Need to get picture of item from img folder
// but this is handled from backend

class Item extends Component {
  render() {
    return (
        <div class="item card">
          <div class="image">
            <img src= {itemImage} alt = "cutlery"/>
          </div>
          <div class="content">
            <a class="header">Cutlery Set</a>
            <div class="meta">
              <span class="date">$5</span>
            </div>
            <div class="description">
              Handy cutlery set for when you're on the go
            </div>
          </div>
        </div>
    );
  }
}
export default Item;
