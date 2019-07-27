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
            <label>Name</label>
            <div class="two fields">
               <div class="field">
                 <input type="text" name="first-name" placeholder="First Name"></input>
               </div>
               <div class="field">
                 <input type="text" name="last-name" placeholder="Last Name"></input>
               </div>
            </div>
         </div>
         <div class="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username"></input>
         </div>
         <div class="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email Address"></input>
         </div>
         <div class="field">
           <label>Address</label>
           <div class="fields">
              <div class="four wide field">
                <input type="text" name="street-num" placeholder="No:"></input>
              </div>
              <div class="twelve wide field">
                  <input type="text" name="street-address" placeholder="Street Address"></input>
              </div>
           </div>
           <div class="fields">
              <div class="ten wide field">
                  <input type="text" name="suburb" placeholder="Suburb"></input>
              </div>
              <div class="three wide field">
                  <input type="text" name="post-code" placeholder="Post Code"></input>
              </div>
              <div class="three wide field">
                  <input type="text" name="state" placeholder="State"></input>
              </div>
           </div>
         </div>
         <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"></input>
         </div>
         <div class="field">
           <div class="ui checkbox">
             <input type="checkbox" tabindex="0" class="hidden"></input>
             <label>I agree to the Terms and Conditions</label>
           </div>
         </div>
         <button class="ui button"><NavLink to="./browse" style={{color: 'white'}}>Sign Up</NavLink></button>
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
