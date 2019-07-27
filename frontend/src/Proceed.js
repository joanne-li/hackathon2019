import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import HEREMap from 'here-maps-react'

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

    return (
      <div>
      <h1 style={{textAlign: 'center'}}>Proceed</h1>
      <Grid>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>

      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
      </Grid>

      <HEREMap
        appId="FE8HUDOupfO7VqgfN-WM1qQkse8FN-ufB0JPWPxT_Jw"
        appCode="econox"
        center={{ lat: -12.0464, lng: -77.0428 }}
        zoom={12}
      />



      </div>
    );
  }
}

export default Cart;
