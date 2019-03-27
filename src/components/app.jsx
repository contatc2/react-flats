import React, { Component } from 'react';

import FlatList from './flat_list';
import MapReact from './map_react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: ""
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: index
    });
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.props.flats} />
        </div>
        <div className="map-container">
          <MapReact />
        </div>
      </div>
    );
  }
}

export default App;
