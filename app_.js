import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

class Root extends Component {
  state = {
    viewport: {
      latitude: 35,
      longitude" 135,
      zoom: 10,
      bearling: -20,
      pitch: 60
    }
  }
  render() {
    const {viewport} = this.state;
    return (
      <MapGL
        {...viewpport}
        mapStyle="https://hfu.github.io/macrostyle/style.json"
        onViewportChange={v => this.setState({viewport: v})}
        preventStyleDiffing={false}
        perspectiveEnabled
        width="100vw"
        height="100vh"
      </MapGL>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
render(<Root />, root);

