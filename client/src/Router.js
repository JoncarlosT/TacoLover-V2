import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

//IMPORT AUTHENTICATION
import AuthenticationContext from "./Context/AuthenticationContext";

//IMPORT COMPONENTS/
import Navbar from "./Components/Navbar/Navbar";

//IMPORT PAGES
import LandingPage from "./Pages/Landing/LandingPage";
import RecipesPage from "./Pages/Recipe/RecipesPage";
import RestaurantsPage from "./Pages/Restaurant/RestaurantsPage";
import LoginPage from "./Pages/Login/LoginPage";

export default function Router() {
  const { loggedIn } = useContext(AuthenticationContext);
  console.log(loggedIn);

  return (
    <RouterWrapper>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
        <Switch>
          <Route path="/Restaurants" component={RestaurantsPage} />
        </Switch>
        <Switch>
          <Route path="/Recipes" component={RecipesPage} />
        </Switch>
        <Switch>
          <Route path="/Login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </RouterWrapper>
  );
}

const RouterWrapper = styled.div``;
