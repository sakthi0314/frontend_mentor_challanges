import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./Map.module.scss";
import "leaflet/dist/leaflet.css";

class MapStructer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: [51.505, -0.09],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.position !== undefined) {
      return {
        position: props.position,
      };

      return null;
    }
  }

  render() {
    return (
      <Map
        className={classes.map}
        center={this.state.position}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={this.state.position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export { MapStructer };
