import React, { Component } from 'react';

import Flat from './flat';


class FlatList extends Component {
  render () {
    return (
      this.props.flats.map(
        flat => (
          <Flat
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            imageUrl={flat.imageUrl}
            name={flat.name}
            key={flat.name}
          />
        )
      )
    );
  }
}

export default FlatList;
