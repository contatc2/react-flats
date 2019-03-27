import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';
import GM_API_KEY from './config_key';

const MapReact = ({ selectedFlat }) => {
  const center = {
    lat: selectedFlat.lat,
    lng: selectedFlat.lng
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GM_API_KEY }}
        center={center}
        defaultZoom={13}
      >
        <Marker
          lat={selectedFlat.lat}
          lng={selectedFlat.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default MapReact;
