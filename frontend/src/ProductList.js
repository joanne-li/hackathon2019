import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import {Grid, Image, Segment} from 'semantic-ui-react'
import axios from 'axios'
import Item from './Item.js'



class ProductList extends Component {
  constructor(){
    super();
    this.state = { products: [], productState: []}
  }
  componentDidMount(){
    axios.get('https://inspired-victor-144517.appspot.com')
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
      <Grid columns={4}>
        {productItems}
      </Grid>
      </div>
    );
  }
}


export default ProductList;
