import React, { Component } from 'react';
import { Button, Grid, List, Image, Label, Menu, Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
     super(props);

     this.state = {
        cartItems: [
          {
             id: 1,
             name: "Chocolate",
             sku: "CHOCO123",
             qtyInStock: 10,
             shopID: 1001,
             qty: 1,
             price: 14,
             total: 14,
             imgLink: ""
          },
          {
             id: 2,
             name: "Beef",
             sku: "BEEF123",
             qtyInStock: 100,
             shopID: 1002,
             qty: 2,
             price: 2,
             total: 4,
             imgLink: ""
          },
          {
             id: 3,
             name: "Snickers",
             sku: "SNICK123",
             qtyInStock: 1000,
             shopID: 1001,
             qty: 1,
             price: 5,
             total: 5,
             imgLink: ""
          },
        ]

     };
 }

   IncrementItem = () => {
      this.setState({ qty : this.state.cartItems[0].qty + 1 });
      console.log(this.state.cartItems[0])
      console.log(this.state.cartItems[0].name)
   }
   DecreaseItem = () => {
      this.setState({ qty: this.state.cartItems[0].qty - 1 });
      console.log(this.state.cartItems[0].qty)
   }
   ToggleClick = () => {
      this.setState({ show: !this.state.show });
   }

   handleSomething() {
      this.IncrementItem();
      this.DecreaseItem();
   }

  render() {
    // List all consts here
    const id = this.state.cartItems.map((id) => <p>{id.id}</p>);
    const name = this.state.cartItems.map((name) => <p>{name.name}</p>);
    const shopID = this.state.cartItems.map((shopID) => <p>{shopID.shopID}</p>);
    const qty = this.state.cartItems.map((qty) => <p>{qty.qty}</p>);
    const price = this.state.cartItems.map((price) => <p>{price.price}</p>);
    const total = this.state.cartItems.map((total) => <p>{total.total}</p>);

    return (
      <div>
      <h1 style={{textAlign: 'center'}}>Shopping Cart</h1>
      <Grid>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item Name</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell><b>{name[0]}</b></Table.Cell>
            <Table.Cell><Button floated='left' onClick={this.DecreaseItem}>-</Button>{qty[0]}<Button floated='right' onClick={this.IncrementItem}>+</Button></Table.Cell>
            <Table.Cell>${price[0]}</Table.Cell>
            <Table.Cell>${total[0]}</Table.Cell>
          </Table.Row>
          <Table.Row>
             <Table.Cell><b>{name[1]}</b></Table.Cell>
             <Table.Cell><Button floated='left' onClick={this.DecreaseItem}>-</Button>{qty[1]}<Button floated='right' onClick={this.IncrementItem}>+</Button></Table.Cell>
             <Table.Cell>${price[1]}</Table.Cell>
             <Table.Cell>${total[1]}</Table.Cell>
          </Table.Row>
          <Table.Row>
             <Table.Cell><b>{name[2]}</b></Table.Cell>
             <Table.Cell><Button floated='left' onClick={this.DecreaseItem}>-</Button>{qty[2]}<Button floated='right' onClick={this.IncrementItem}>+</Button></Table.Cell>
             <Table.Cell>${price[2]}</Table.Cell>
             <Table.Cell>${total[2]}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
      </Grid>

      <Button><NavLink to="./proceed" style={{color: 'white'}}>Proceed</NavLink></Button>

      </div>
    );
  }
}

export default Cart;
