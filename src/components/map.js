import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749, // Latitude of your location
          lng: -122.4194 // Longitude of your location
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD_6yH-KwGXniV7oQPVangfCjx-veNl3a0' // Replace with your Google Maps API Key
})(GoogleMap);
