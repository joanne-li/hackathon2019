import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import {Grid, Image, Segment} from 'semantic-ui-react'
import axios from 'axios'
import Item from './Item.js'
import Dashboard from './Dashboard'


class ProductList extends Component {
  constructor(){
    super();
    this.state = { products: [], productState: []}
  }
  componentDidMount(){
    axios.get('https://api.jsonbin.io/b/5d3c1363ea04da211dc3767d')
      .then((result) => {
          this.setState({products: result.data.products})
            }
          );
  }

  render() {
    var productItems = this.state.products.map((item) => {
      return (
          <Grid.Column>
          <Item name={item['name']} price={item['price']} business={item['business']} sustainability={item['sustainability']} img={item['img']}/>
          </Grid.Column>
      )});


    return (
      <div>
      <Grid container columns={4}>
        {productItems}
      </Grid>
      </div>
    );
  }
}


export default ProductList;
