import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Browse extends Component {
  render() {
    return (
      <div>
         <button class="ui button"><NavLink to="./cart" style={{color: 'white'}}>Shopping Cart</NavLink></button>
      </div>
    );
  }
}

export default Browse;
