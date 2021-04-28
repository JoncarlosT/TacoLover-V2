import React, { useContext } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

//IMPORT AUTHENTICATION
import AuthenticationContext from "../../../Context/AuthenticationContext";

//IMPORT STYLE
import { StyledLogOutButton } from "./style";

//IMPORT COMPONENTS
import DevLocalHost from "../../../GlobalProvider";

export default function LogOutButton() {
  const { getLoggedIn } = useContext(AuthenticationContext);
  const history = useHistory();

  const logOut = async () => {
    await axios.get(DevLocalHost() + "/authentication/logout");
    await getLoggedIn();
    history.push("/");
  };

  return <StyledLogOutButton onClick={logOut}>Log Out</StyledLogOutButton>;
}
