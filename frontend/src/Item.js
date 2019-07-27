import React, { Component } from 'react';
import itemImage from './img/cutlery.jpg';
import './css/Item.css';

// Need to get picture of item from img folder
// but this is handled from backend

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      price: this.props.price,
      industry: this.props.industry,
      sustainability: this.props.sustainability,
      img: this.props.img,
    }
  }
  render() {
    return (
      <div className="ui card">
      <div className="image">
        <img src={this.state.img} alt= {this.state.name}/>
      </div>
      <div className="content">
        <a className="header">{this.state.name}</a>
        <div className="meta">
          <span className="date">{this.state.price}</span>
        </div>
        <div className="description">
          {this.state.sustainability}
        </div>
      </div>
      </div>
    );
  }
}
export default Item;
