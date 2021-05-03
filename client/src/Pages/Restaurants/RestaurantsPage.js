import React, { memo, useEffect, useState } from "react";
import ReactMap, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import DevLocalHost from "../../GlobalProvider";

import axios from "axios";

//IMPORT STYLES
import { RestaurantsWrapper, TacoIcon } from "./styles";

export default function RestaurantsPage() {
  //SETTING UP MAP
  //SETTING UP MAP
  const [viewport, setViewport] = useState({
    latitude: 40.66995747013945,
    longitude: -103.59179687498357,
    zoom: 3,
    width: "100vw",
    height: "500px",
  });

  //GETS RESTUARANTS
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    axios
      .get(DevLocalHost() + "/restaurants")
      .then((res) => setRestaurants(res.data));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const [selectedTaco, setSelectedTaco] = useState(null);

  return (
    <div>
      <ReactMap
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/jc1280/ckm16fh6i9x6n17o0pm4r5091"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {restaurants.map((restaurant, i) => {
          return (
            <Marker
              key={i}
              latitude={restaurant.geometry.coordinates[1]}
              longitude={restaurant.geometry.coordinates[0]}
            >
              <TacoIcon
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTaco(restaurant);
                }}
                src="/Assets/Taco-svg.png"
                alt="taco"
              />
            </Marker>
          );
        })}

        {selectedTaco && (
          <Popup
            onClick={console.log("hit")}
            onClose={() => setSelectedTaco(null)}
            latitude={selectedTaco.geometry.coordinates[1]}
            longitude={selectedTaco.geometry.coordinates[0]}
          >
            <h3>{selectedTaco.title}</h3>
            <p>{selectedTaco.description}</p>
            <p>By: {selectedTaco.author.userName}</p>
          </Popup>
        )}
      </ReactMap>
      <RestaurantsWrapper></RestaurantsWrapper>
    </div>
  );
}
