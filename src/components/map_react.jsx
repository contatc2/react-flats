import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import Marker from './marker';

const APIKEY = 'AIzaSyDds79T_dX3-N-o7sDO4Y3v3ugSugQUCXA';

class MapReact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapReact;
