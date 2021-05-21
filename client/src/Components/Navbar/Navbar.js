import React, { useState, useEffect, useContext } from "react";

//IMPORT MATERIAL-UI
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@material-ui/core";

//IMPORT AUTHENTICATION
import AuthenticationContext from "../../Context/AuthenticationContext";
import LogOutButton from "../Authentication/LogOutButton/LogOutButton";

//IMPORTING STYLED COMPONENTS
import {
  Logo,
  StyledNavbar,
  NavbarButtonsWrapper,
  NavbarButton,
  MobileIcon,
  MobileMenuItem,
  LogOutMenuItem,
} from "./Styles";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import DevLocalHost from "../../GlobalProvider";

export default function Navbar() {
  //CHECKS IF SCREEN IS IN MOBILE
  const [mobile, setMobile] = useState(false);

  const checkPageSize = () => {
    if (window.innerWidth <= 890) setMobile(true);
    else setMobile(false);
  };

  useEffect(() => {
    checkPageSize();
  }, []);

  window.addEventListener("resize", checkPageSize);

  //MOBILE MENU SET UP
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //MOBILE LOGOUT
  const history = useHistory();

  const logOut = async () => {
    await axios.get(DevLocalHost() + "/api/authentication/logout");
    await getLoggedIn();
    history.push("/");
  };

  //LOGIN CHECK
  const { loggedIn, getLoggedIn } = useContext(AuthenticationContext);

  return (
    <StyledNavbar>
      <Logo to="/">
        <span>Ta</span>co
        <span>Lover</span>
      </Logo>

      {mobile ? (
        <>
          <MobileIcon onClick={handleClick}>
            <MenuIcon fontSize="large" />
          </MobileIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <MobileMenuItem to="/Restaurants">Restaurants</MobileMenuItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <MobileMenuItem to="/Recipes">Recipes</MobileMenuItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {loggedIn ? (
                <LogOutMenuItem onClick={logOut}>LogOut</LogOutMenuItem>
              ) : (
                <MobileMenuItem to="/Login">Login</MobileMenuItem>
              )}
            </MenuItem>
          </Menu>
        </>
      ) : (
        <NavbarButtonsWrapper>
          <NavbarButton to="/Restaurants">Restaurants</NavbarButton>
          <NavbarButton to="/Recipes">Recipes</NavbarButton>

          {loggedIn ? (
            <LogOutButton />
          ) : (
            <NavbarButton to="/Login">Login</NavbarButton>
          )}
        </NavbarButtonsWrapper>
      )}
    </StyledNavbar>
  );
}
