import React, { Component } from 'react';
import {Container, Statistic, Icon, Image, Header, Divider} from 'semantic-ui-react'
import diagram from './img/diagram.png'

class BusinessDashboard extends Component {
  render() {
    return (
      <div>

      <Container center>
          <Header size='huge'>My business dashboard</Header>
          <Divider />
          <Statistic.Group>
          <Statistic>
            <Statistic.Value>31</Statistic.Value>
            <Statistic.Label>Customers</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              33
            </Statistic.Value>
            <Statistic.Label>views</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              10
            </Statistic.Value>
            <Statistic.Label>returning customers</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              11
            </Statistic.Value>
            <Statistic.Label>New customers</Statistic.Label>
          </Statistic>
      </Statistic.Group>
      <Container>
      </Container>

      <Image src = {diagram} size = 'large'>
      </Image>
      </Container>
      </div>
    );
  }
}

export default BusinessDashboard;
