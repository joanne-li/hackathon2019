import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
         <h1 style={{textAlign: 'center'}}>Login</h1>
         <Grid>
         <Grid.Column width={2}></Grid.Column>
         <Grid.Column width={12}>
         <form class="ui form">
            <div class="field">
               <label>Username</label>
               <input type="text" name="username" placeholder="Username"></input>
            </div>
            <div class="field">
               <label>Password</label>
               <input type="password" name="password" placeholder="Password"></input>
            </div>
            <button class="ui button"><NavLink to="./browse" style={{color: 'white'}}>Login</NavLink></button>
            <button class="ui button"><NavLink to="./" style={{color: 'white'}}>Cancel</NavLink></button>
            // Need to route this to checker
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
