import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Nav extends Component {
  render() {
    return (
      <div>
         <Grid>
         
         <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={2}>
            <h1>ECONOX</h1>
            </Grid.Column>
            <Grid.Column width={9}>
            </Grid.Column>
            <Grid.Column width={3}>
               <Button.Group size='large'>
                  <Button>Login</Button>
                  <Button>Sign Up</Button>
               </Button.Group>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
         </Grid.Row>

         <Grid.Row centered columns={2}>
            <Grid.Column>
               <Button.Group size='large'>
                  <Button>Home</Button>
                  <Button>About</Button>
                  <Button>Shop</Button>
                  <Button>For Business</Button>
               </Button.Group>
            </Grid.Column>
         </Grid.Row>

         </Grid>
      </div>

    );
  }
}

export default Nav;
