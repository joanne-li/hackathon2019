import React, { Component } from 'react';
import {Grid, Image, Segment} from 'semantic-ui-react'
import axios from 'axios'
import Item from './Item.js'
import Dashboard from './Dashboard'


class BusinessList extends Component {
  render() {

    return (
      <div>
      <Grid container columns={4}>
        {productItems}
      </Grid>
      <Dashboard/>
      </div>
    );
  }
}


export default BusinessList;
