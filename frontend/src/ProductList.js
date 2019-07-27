import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import {Grid, Image, Segment, Select, Container, Form, Button} from 'semantic-ui-react'
import axios from 'axios'
import Item from './Item.js'

const sortOptions = [
  {key: 'abc', value: 'Alphabetical', text: 'Alphabetical'},
  {key: 'p123', value: 'Price (Ascending)', text: 'Price (Ascending)'},
  {key: 'p321', value: 'Price (Descending)', text: 'Price (Descending)'},
  {key: 's123', value: 'Sustainability (Ascending)', text: 'Sustainability (Ascending)'},
  {key: 's321', value: 'Sustainability (Descending)', text: 'Sustainability (Descending)'}
];


class ProductList extends Component {
  constructor(){
    super();
    this.state = { products: [] } ;
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    axios.get('https://api.jsonbin.io/b/5d3c47b9ea04da211dc38b4e')
      .then((result) => {
          this.setState({ products: result.data });
            }
          ).catch(err => console.log(err));
  }
  handleClick (e) {
    e.preventDefault();
    axios.get('https://api.jsonbin.io/b/5d3c47b9ea04da211dc38b4e')
      .then((result) => {
        this.setState({products: result.data});
      });
  }
  render() {
    var productItems = this.state.products.map((item) => {
      return (
          <Grid.Column>
          <Item name={item['product_name']}
            price={item['price']}
            industry={item['product_industry']}
            brand={item['brand_key']}
            business={item['business_key']}
            stocklevel={item['level']}
            sustainability={item['score']}
            img={item['product_img'] }/>
          </Grid.Column>
      )});


    return (
      <Container text>
      <Form>
        <Form.Group>
          <Form.Field control={Select} options={sortOptions} label='Sort by...' />
        </Form.Group>
        <Form.Button onClick={this.handleClick}>Submit</Form.Button>
      </Form>
      <Grid container columns={4}>
        {this.state.products.map((item) => {
          return (
              <Grid.Column>
              <Item name={item['product_name']}
                price={item['price']}
                industry={item['product_industry']}
                brand={item['brand_key']}
                business={item['business_key']}
                stocklevel={item['level']}
                sustainability={item['score']}
                img={item['product_img'] }/>
              </Grid.Column>
          )})}
      </Grid>
      </Container>
    );
  }
}


export default ProductList;
