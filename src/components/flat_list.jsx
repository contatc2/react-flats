import React from 'react';

import Flat from './flat';


const FlatList = ({ flats }) => {
  return (
    flats.map(
      flat => (
        <Flat
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          imageUrl={flat.imageUrl}
          name={flat.name}
          key={flat.name}
          // selectFlat={this.props.selectFlat}
        />
      )
    )
  );
};

export default FlatList;
