import React from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";

import "./MyMap.css";

const MyMap = () => {
  return (
    <MapContainer center={[44.663689, 16.278737]} zoom={7}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};
export default MyMap;
