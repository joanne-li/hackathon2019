import React, { Component } from 'react';
import {Menu, Image } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import logo from './img/logo.png'
class Nav extends Component {

  render() {
    return (
        <Menu secondary>
          <Menu.Item name='logo'> <NavLink to="./"><Image src = {logo} size='small'></Image></NavLink></Menu.Item>
          <Menu.Item name='shop'><NavLink to="./browse"> Shop </NavLink></Menu.Item>
          <Menu.Item name='Explore'><Link to='/explore'> Explore </Link></Menu.Item>
          <Menu.Item name='business'><Link to="/register-my-business"> Register Your Business </Link></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item><NavLink to="./dashboard"> Dashboard </NavLink></Menu.Item>
            <Menu.Item><NavLink to="./login"> Login </NavLink></Menu.Item>
            <Menu.Item><NavLink to = "./signup"> Sign Up </NavLink></Menu.Item>
          </Menu.Menu>

      </Menu>
    );
  }
}

export default Nav;
