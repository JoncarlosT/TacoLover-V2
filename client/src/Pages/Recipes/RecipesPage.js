import React from "react";

//IMPORT STYLES
import { StyledRecipePage, RecipesWrapper, Title } from "./styles";

//IMPORT COMPONENTS
import RecipesList from "./RecipesList";
import FoodImageCard from "../../Components/FoodImageCard/FoodImageCard";

export default function RecipePage() {
  return (
    <StyledRecipePage>
      <Title>Here's Our Recipes</Title>
      <RecipesWrapper>
        {RecipesList.map((food, i) => {
          return <FoodImageCard details={food} key={i} />;
        })}
      </RecipesWrapper>
    </StyledRecipePage>
  );
}
