import React, { Component } from 'react';
import MapGl from 'react-map-gl';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: '450px',
        latitude: 42.0266573,
        longitude: -93.6456403,
        zoom: 14,
      },
    };
  }

  render() {
    return (
      <MapGl
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}

export default Map;
