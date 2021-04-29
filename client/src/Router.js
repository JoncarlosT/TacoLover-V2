import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

//IMPORT AUTHENTICATION
import AuthenticationContext from "./Context/AuthenticationContext";

//IMPORT COMPONENTS/
import Navbar from "./Components/Navbar/Navbar";

//IMPORT PAGES
import LandingPage from "./Pages/Landing/LandingPage";
import RecipesPage from "./Pages/Recipes/RecipesPage";
import SingleRecipe from "./Pages/SingleRecipe/SingleRecipe";
import RestaurantsPage from "./Pages/Restaurants/RestaurantsPage";
import LoginPage from "./Pages/Login/LoginPage";

export default function Router() {
  const { loggedIn } = useContext(AuthenticationContext);

  //USER SELECT TACO
  const [foodSelected, setFoodSelected] = useState([]);

  return (
    <RouterWrapper>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />

          <Route path="/Restaurants" component={RestaurantsPage} />

          <Route path="/Recipes">
            <RecipesPage setFood={setFoodSelected} />
          </Route>

          <Route path={`/Recipe/${foodSelected.id}`}>
            <SingleRecipe taco={foodSelected} />
          </Route>

          <Route path="/Login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </RouterWrapper>
  );
}

const RouterWrapper = styled.div``;
