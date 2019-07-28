import React, { Component } from 'react';
import { Button, Grid, List, Image, Label, Menu, Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import map from './img/Map.png';

class Cart extends Component {
  render() {

    return (
      <div>
      <h1 style={{textAlign: 'center'}}>Proceed</h1>
      <Grid>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>
      <Image src={map} fluid />
      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default Cart;
