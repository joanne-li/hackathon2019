import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import {Container, Header, Image, Divider, List} from 'semantic-ui-react'
import logo from './img/logo.png';

// OR PROFILE OF BUSINESS
class About extends Component {
  render() {
    return (
      <div>
        <Container>
        <Header size='huge'>About Us</Header>
        <Divider />
        <Header as='h2'>
          Our story
        </Header>

        <Image circular src= {logo} size='medium' />
        <List>
        </List>
        <div>
          We're passionate about making sustainability and eco-friendliness convenient to consumers.
          Consumers should not be burdened by the lack of information on products. We aim to connect
          consumers with businesses to build loyal relationships for the enhancement of our planet
        </div>
        </Container>
      </div>
    );
  }
}


export default About;
