import React, { useContext } from "react";
// import axios from "axios";

// import Loader from "react-loader-spinner";
// import Rating from "react-rating";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "../../Context/UserSelectsContext";

//IMPORT AUTH
import AuthenticationContext from "../../Context/AuthenticationContext";

//IMPORT DEV LOCALHOST
// import DevLocalHost from "../../GlobalProvider";

export default function SingleRestaurant() {
  const { loggedIn } = useContext(AuthenticationContext);
  const { selectedRestaurant } = useContext(UserSelectsContext);

  return (
    <div>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
    </div>
  );
}
