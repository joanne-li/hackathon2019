import React, { Component } from 'react';
import { Image, Button, Segment, Icon, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import bgimg from './img/bg0.jpg';
import christine from './img/christine.jpeg';
import joanne from './img/joanne.jpg';
import phoebe from './img/phoebe.jpg';
import alec from './img/alec.jpg';
import damin from './img/damin.jpg';


import {Container} from 'semantic-ui-react';

const bgStyle = {
  backgroundImage: 'url(' + bgimg + ')',
  backgroundSize: 'cover',
  height: '800px',
  textAlign: 'center'
}

const Home = () => (
    <div class='bg ui segment App-img' style={bgStyle}>
    <div style={{height:250}}></div>
          <h1 class='text1-white'>ECONOX</h1>
          <p class='text2-white'>Shop green.</p><br />
          <div class='ui'>
          <Link to='/browse'><Button animated='vertical' inverted>
            <Button.Content visible>Browse</Button.Content>
            <Button.Content hidden>
              <Icon name='shop' />
            </Button.Content>
          </Button>
          </Link>
          <Link to='#about'>
            <Button animated='vertical' inverted class='landing-button'>
              <Button.Content visible>Learn More</Button.Content>
              <Button.Content hidden><Icon name='info' /></Button.Content>
            </Button>
          </Link>
          </div>
    </div>
);


class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { tag: props.tag, title: props.title};
    if (props.tag === 'about') {
      this.body = ( <AboutBody /> );
    } else if (props.tag === 'team') {
      this.body = ( <TeamList /> );
    }
  }
  render() {
    return(
      <div id='about'>
        <div class='ui main text container'>
          <h1>{this.state.title}</h1>
          {this.body}
          <div style={{paddingBottom:50}} class='ui divider' />
        </div>
      </div>

    );
  }
};

const AboutBody = () => (
  <div>
  <Segment raised>
    <p>Econox aims to provide balance in your day. Our platform allows the eco-aware consumer to plan and customise their shopping experience. </p>
  </Segment>

  </div>
);

const TeamList = props => (
    <div class='teamlist'>
      <List horizontal>
        <List.Item>
          <List.Content>
          <Image avatar size='tiny' circular src={phoebe} /><br /><br />
            <List.Header>Phoebe</List.Header>Back End Developer
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
          <Image avatar size='tiny' circular src={alec} /><br /><br />
            <List.Header>Alec</List.Header>Back End Developer
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
          <Image avatar size='tiny' circular src={damin} /><br /><br />
            <List.Header>Damin</List.Header>Front End Developer
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Image avatar size='tiny' circular src={joanne} /><br /><br />
            <List.Header>Joanne</List.Header>Front End Developer
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Image avatar size='tiny' circular src={christine} /><br /><br />
            <List.Header>Christine</List.Header>Front End Developer
          </List.Content>
        </List.Item>
      </List>
    </div>
);


const HomeAll = () => (
  <div>
  <Home />
  <Section tag='about' title='Plan Ahead & Shop With Econox' />
  <Section tag='team' title='Team' />
  </div>
);
export default HomeAll;
