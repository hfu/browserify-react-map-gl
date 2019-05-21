import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

class Root extends Component {

  state = {
    viewport: {
      latitude: 35,
      longitude: 135,
      zoom: 16.140440,
      bearing: -20.55991,
      pitch: 60,
    }
  }

  render() {

    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="https://hfu.github.io/macrostyle/style.json"
        onViewportChange={v => this.setState({viewport: v})}
        preventStyleDiffing={false}
        perspectiveEnabled
        width="100vw"
        height="100vh">
      </MapGL>
    );
  }

}

const root = document.createElement('div');
document.body.appendChild(root);

render(<Root />, root);

