import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapLocation extends Component {
    // ... (constructor and other code)

    // Function to get the user's current location
    getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                console.log('Current Location:', latitude, longitude);

                // You can do something with the location data here, such as setting it in the state.
                this.setState({
                    selectedLocation: {
                        lat: latitude,
                        lng: longitude,
                    },
                });
            });
        } else {
            console.error('Geolocation is not supported by your browser.');
        }
    };

    // ... (render and other code)

    render() {
        const { google } = this.props;
        const { selectedLocation } = this.state;

        return (
            <div>
                {/* ... (other components) */}
                <button onClick={this.getCurrentLocation}>Get Current Location</button>
                {/* ... (other components) */}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'YOUR_API_KEY_HERE',
})(MapLocation);
