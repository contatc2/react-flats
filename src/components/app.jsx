import React, { Component } from 'react';

import FlatList from './flat_list';
import MapReact from './map_react';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: "",
      flats: flats
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats={this.state.flats}
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="map-container">
          <MapReact selectedFlat={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
