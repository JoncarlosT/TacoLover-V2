import React, { memo, useContext } from "react";
import UserSelectsContext from "../../Context/UserSelectsContext";

import { StyledRestaurantMapInfo, GoToRestaurantButton } from "./styles";

function RestaurantMapInfo({ info }) {
  const { setSelectedRestaurant } = useContext(UserSelectsContext);
  return (
    <StyledRestaurantMapInfo onClick={() => setSelectedRestaurant(info)}>
      <GoToRestaurantButton to={`/Restaurant/${info._id}`}>
        <h3>{info.title}</h3>
        <p>{info.contact}</p>
        <p>By: {info.author.userName}</p>
      </GoToRestaurantButton>
    </StyledRestaurantMapInfo>
  );
}

export default memo(RestaurantMapInfo);
