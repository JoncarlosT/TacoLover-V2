import React, { useContext } from "react";
// import axios from "axios";

// import Loader from "react-loader-spinner";
// import Rating from "react-rating";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "../../Context/UserSelectsContext";

import {
  CommentSide,
  RestaurantSide,
  StyledSingleRestaurant,
  RestaurantTitle,
  RestaurantImg,
  RestaurantText,
  CommentHeader,
} from "./styles";

//IMPORT AUTH
import AuthenticationContext from "../../Context/AuthenticationContext";

//IMPORT DEV LOCALHOST
// import DevLocalHost from "../../GlobalProvider";

export default function SingleRestaurant() {
  const { loggedIn } = useContext(AuthenticationContext);
  const { selectedRestaurant } = useContext(UserSelectsContext);

  console.log(selectedRestaurant);
  return (
    <StyledSingleRestaurant>
      <RestaurantSide>
        <RestaurantTitle>{selectedRestaurant.title}</RestaurantTitle>

        <RestaurantImg
          src={selectedRestaurant.images}
          alt={selectedRestaurant.title}
        />

        <RestaurantText>{selectedRestaurant.title}</RestaurantText>
        <RestaurantText>{selectedRestaurant.location}</RestaurantText>
        <RestaurantText>
          By: {selectedRestaurant.author.userName}
        </RestaurantText>
      </RestaurantSide>
      <CommentSide>
        {loggedIn ? (
          <CommentHeader>Leave a Comment</CommentHeader>
        ) : (
          <CommentHeader>Sign In To Comment</CommentHeader>
        )}
      </CommentSide>
    </StyledSingleRestaurant>
  );
}
