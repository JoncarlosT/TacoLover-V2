import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//IMPORT AUTHENTICATION
import AuthenticationContext from "./Context/AuthenticationContext";

//IMPORT COMPONENTS/
import Navbar from "./Components/Navbar/Navbar";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "./Context/UserSelectsContext";

//IMPORT PAGES
import LandingPage from "./Pages/Landing/LandingPage";
import RecipesPage from "./Pages/Recipes/RecipesPage";
import SingleRecipe from "./Pages/SingleRecipe/SingleRecipe";
import RestaurantsPage from "./Pages/Restaurants/RestaurantsPage";
import LoginPage from "./Pages/Login/LoginPage";
import SingleRestaurant from "./Pages/SingleRestaurant/SingleRestaurant";
import CreateRestaurant from "./Pages/CreateRestaurant/CreateRestaurant";

import styled from "styled-components";
import BG from "./Assets/Taco-bg.jpg";

export default function Router() {
  const { loggedIn } = useContext(AuthenticationContext);

  const { selectedFood } = useContext(UserSelectsContext);
  const { selectedRestaurant } = useContext(UserSelectsContext);

  return (
    <BrowserRouter>
      <Background>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />

          <Route path="/Restaurants" component={RestaurantsPage} />

          <Route
            path={`/Restaurant/${selectedRestaurant._id}`}
            component={SingleRestaurant}
          />

          {loggedIn && (
            <Route path="/CreateRestaurant/" component={CreateRestaurant} />
          )}

          <Route path="/Recipes" component={RecipesPage} />

          <Route path={`/Recipe/${selectedFood.id}`} component={SingleRecipe} />

          <Route path="/Login" component={LoginPage} />
        </Switch>
      </Background>
    </BrowserRouter>
  );
}

const Background = styled.div`
  background-image: url(${BG});
  background-attachment: fixed;
  background-size: cover;
  overflow-x: hidden;
`;
