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
<<<<<<< HEAD
=======
        <Banner />
      <Container>
      <Segment raised>
      <Form>
        <Form.Group>
          <Form.Field control={Select} options={sortOptions} label='Sort by...' />
        </Form.Group>
        <Form.Button onClick={this.handleClick}>Submit</Form.Button>
      </Form>
      </Segment>
>>>>>>> d1c540b0204cc160a19a6fc07960d5a3964e7913
      <Grid container columns={4}>
        {productItems}
      </Grid>
      </div>
    );
  }
}


export default ProductList;
