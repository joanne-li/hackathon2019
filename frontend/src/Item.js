import React, { Component } from 'react';
import './css/Item.css';
import {Icon, Image} from 'semantic-ui-react';


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
        <Image src={this.state.img} alt= {this.state.name} style={{height: 200, backgroundSize: 'cover'}}/>
      </div>
      <div className="content">
        <a className="header">{this.state.name.slice(0,10)}</a>
        <div className="description">
          <Icon name='dollar sign' />{this.state.price.toFixed(1)}
          &ensp;
          <Icon name='leaf' />{this.state.sustainability.toFixed(1)}
        </div>
      </div>
      </div>
    );
  }
}
export default Item;
