import React from 'react';

const Marker = ({ lat, lng }) => {
  if (!lat || !lng) {
    return null;
  }
  return <div className="marker">&nbsp;</div>;
};

export default Marker;
