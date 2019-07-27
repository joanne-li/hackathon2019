import React, { Component } from 'react';
import {Image,List, Container, Header, Divider} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import profile from './img/profile.jpg';
import profile1 from './img/profile1.jpg';
import profile2 from './img/profile2.jpg';

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
      <Header as='h2'>
        Bill's Butcher
      </Header>
      <List relaxed size = "big">
        <List.Item>
          <Image circular src={profile1} size = "small" />
            <List.Content>
              <List.Header as='a'><NavLink to="./bill">Bill's Butcher</NavLink></List.Header>
              <List.Description>
                Auburn, Sydney
              </List.Description>
            </List.Content>
        </List.Item>
      </List>
      <Header as='h2'>
        Sally's Bakery
      </Header>
      <List relaxed size = "big">
        <List.Item>
          <Image circular src={profile2} size = "small" />
            <List.Content>
              <List.Header as='a'><NavLink to="./sally">Sally's Bakery</NavLink></List.Header>
              <List.Description>
                Mount Druitt, Sydney
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
