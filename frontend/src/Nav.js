import React, { Component } from 'react';
import { Button, Grid, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div>
         <Grid>

         <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={2}>
            <h1><NavLink to="./" style={{color: 'black'}}>ECONOX</NavLink></h1>
            </Grid.Column>
            <Grid.Column width={9}>
            </Grid.Column>
            <Grid.Column width={3}>
               <Button.Group size='large'>
                  <Button><NavLink to="./login" style={{color: 'white'}}>Login</NavLink></Button>
                  <Button><NavLink to="./signup" style={{color: 'white'}}>Sign Up</NavLink></Button>
               </Button.Group>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
         </Grid.Row>

         <Grid.Row centered columns={2}>
            <Grid.Column>
               <Button.Group size='large'>
                  <Button><NavLink to="./" style={{color: 'white'}}>Home</NavLink></Button>
                  <Button>About</Button>
                  <Button><NavLink to="./browse" style={{color: 'white'}}>Shop</NavLink></Button>
                  <Button><NavLink to="./" style={{color: 'white'}}>For Business</NavLink></Button>
               </Button.Group>
            </Grid.Column>
         </Grid.Row>

         </Grid>

      </div>
    );
  }
}

export default Nav;
