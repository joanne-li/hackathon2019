import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import {Container, Header, Image, Divider, List} from 'semantic-ui-react'
import profile from './img/profile1.jpg';
import Banner from './Banner';



class Explore extends Component {
  render() {
    return (
      <div>
      <Banner />
        <Container>
        <Header size='huge'>Support our local businesses</Header>
        <Divider />
        <Header as='h2'>
          Bill's Butcher
        </Header>

        <Image circular src= {profile} size='medium' />
        <List>
        <List.Item>
          <List.Icon name='users' />
          <List.Content>Bill's Butcher</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='marker' />
          <List.Content>Auburn, Sydney</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href='mailto:samstore@fakeeeee81!.com'>billy@nyc.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='linkify' />
          <List.Content>
            <a href='https://samsstorenotreal.com'>biillllly.com.au</a>
          </List.Content>
        </List.Item>
        </List>
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </div>
        </Container>
      </div>
    );
  }
}


export default Explore;
