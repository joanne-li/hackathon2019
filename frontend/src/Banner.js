import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import bgimg from './img/bg0.jpg';

// Need to get picture of item from img folder
// but this is handled from backend

const bannerStyle = {
  backgroundImage: 'url(' + bgimg + ')',
  backgroundSize: 'cover',
  height: '200px',
  textAlign: 'center'
}
class Banner extends Component {
  render() {
    return (
      <div>
      <div class='bg ui segment App-img' style={bannerStyle}>
      </div>
      <br /><br />
      </div>
    );
  }
}

export default Banner;
