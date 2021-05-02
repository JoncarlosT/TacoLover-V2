import React, { memo, useState } from "react";
import ReactMap, { Marker, Popup } from "react-map-gl";

export default function RestaurantsPage() {
  //SETTING UP MAP
  const [viewport, setViewport] = useState({
    latitude: 40.66995747013945,
    longitude: -103.59179687498357,
    zoom: 3,
    width: "100vw",
    height: "500px",
  });

  return (
    <div>
      <ReactMap
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/jc1280/ckm16fh6i9x6n17o0pm4r5091"
        onViewportChange={(viewport) => setViewport(viewport)}
      />

      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
      <h1>Helo</h1>
    </div>
  );
}
