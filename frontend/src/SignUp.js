import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
      <h1 style={{textAlign: 'center'}}>Sign Up</h1>
      <Grid>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>
      <form class="ui form">
         <div class="field">
            <label>Username</label>
            <input type="text" name="first-name" placeholder="Username"></input>
         </div>
         <div class="field">
            <label>Password</label>
            <input type="text" name="last-name" placeholder="Password"></input>
         </div>
         <div class="field">
           <div class="ui checkbox">
             <input type="checkbox" tabindex="0" class="hidden"></input>
             <label>I agree to the Terms and Conditions</label>
           </div>
         </div>
         <button class="ui button" type="submit">Sign Up</button>
         <button class="ui button"><NavLink to="./" style={{color: 'white'}}>Cancel</NavLink></button>
         // Need to split this for customer and businesses
      </form>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default Login;
