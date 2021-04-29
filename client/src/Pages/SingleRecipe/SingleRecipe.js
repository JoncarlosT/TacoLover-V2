import React from "react";

//  IMPORT STYLES
import { StyledSingleRecipe } from "./style";

export default function SingleRecipe({ food }) {
  console.log(food);
  return <StyledSingleRecipe>{food.title}</StyledSingleRecipe>;
}
