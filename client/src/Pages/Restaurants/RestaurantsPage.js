import React, { memo, useEffect, useState } from "react";
import ReactMapboxGl, { Marker, Popup, Layer } from "react-mapbox-gl";
import * as MapboxGl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import DevLocalHost from "../../GlobalProvider";

import axios from "axios";

//IMPORT STYLES
import { RestaurantsWrapper, TacoIcon } from "./styles";

export default function RestaurantsPage() {
  //SETTING UP MAP
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    trackResize: true,
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
      <Map
        style="mapbox://styles/jc1280/ckm16fh6i9x6n17o0pm4r5091"
        center={[-103.59179687498357, 40.66995747013945]}
        zoom={[3]}
        containerStyle={{
          height: "calc(100vh - 350px)",
          width: "100%",
        }}
      >
        {restaurants.map((restaurant, i) => {
          console.log(restaurant);
          return (
            <Marker key={i} coordinates={restaurant.geometry.coordinates}>
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
          <Popup coordinates={selectedTaco.geometry.coordinates}>
            <h1>hello</h1>
          </Popup>
        )}
      </Map>
      <RestaurantsWrapper></RestaurantsWrapper>
    </div>
  );
}
