import React from 'react';

import Flat from './flat';


const FlatList = ({ flats, selectFlat }) => {
  return (
    flats.map(
      flat => (
        <Flat
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          imageUrl={flat.imageUrl}
          name={flat.name}
          key={flat.name}
          selectFlat={selectFlat}
        />
      )
    )
  );
};

export default FlatList;
