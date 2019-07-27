import React, { Component } from 'react';
import HEREMap from 'here-maps-react'

class MapContainer extends React.Component {
  render() {
    return (
      <HEREMap
        appId="FE8HUDOupfO7VqgfN-WM1qQkse8FN-ufB0JPWPxT_Jw"
        appCode="econox"
        center={{ lat: -12.0464, lng: -77.0428 }}
        zoom={12}
      />
    )
  }
}

export default MapContainer;
