import React, { Component } from 'react';
import {Grid, Image, Segment, List, Container, Header, Divider} from 'semantic-ui-react'
import axios from 'axios'
import Item from './Item.js'
import { NavLink } from 'react-router-dom'
import profile from './img/profile.jpg';

class BusinessList extends Component {
  render() {

    return (
      <div>
      <Container>
      <Header size='huge'>Our eco-friendly businesses</Header>
      <Divider />
      <Header as='h2'>
        Sam's Groceries
      </Header>
      <List relaxed size = "big">
        <List.Item>
          <Image circular src={profile} size = "small" />
            <List.Content>
              <List.Header as='a'><NavLink to="./sam">Sam's Groceries</NavLink></List.Header>
              <List.Description>
                Newtown, Sydney
              </List.Description>
            </List.Content>
        </List.Item>
      </List>
      </Container>
      </div>
    );
  }
}


export default BusinessList;
